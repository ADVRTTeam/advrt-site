/**
 * Enquiry forwarder for the brief and contact forms.
 *
 * Takes a POST from either form, runs two cheap spam checks, normalises the
 * payload and forwards it. Nothing is stored here.
 *
 * The two forms go to different places, because they are different things:
 * a brief is a qualified enquiry with sector, budget and timing on it, and a
 * contact message is someone asking a question. Routing them to one hook
 * meant the CRM had to tell them apart after the fact.
 *
 * Env:
 *   ENQUIRY_WEBHOOK_URL    required — where the brief is forwarded, and the
 *                          fallback for anything else
 *   CONTACT_WEBHOOK_URL    optional — where the contact form is forwarded.
 *                          Unset, contact falls back to ENQUIRY_WEBHOOK_URL
 *                          rather than being dropped.
 *   ENQUIRY_WEBHOOK_TOKEN  optional — sent as "Authorization: Bearer <token>"
 *
 * Responds with JSON to fetch (the forms submit by fetch when JS is on) and
 * with a 303 redirect to /thank-you for a native, no-JS form post.
 */

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
  }

  // ---- Parse ----------------------------------------------------------
  let fields = {};
  const contentType = req.headers.get('content-type') ?? '';

  try {
    if (contentType.includes('application/json')) {
      fields = await req.json();
    } else {
      const form = await req.formData();
      for (const [key, value] of form.entries()) {
        if (typeof value !== 'string') continue;
        // Checkbox groups arrive repeated; collect them into arrays.
        if (key in fields) {
          fields[key] = [].concat(fields[key], value);
        } else {
          fields[key] = value;
        }
      }
    }
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const wantsJson =
    contentType.includes('application/json') ||
    (req.headers.get('accept') ?? '').includes('application/json');

  // ---- Spam checks ----------------------------------------------------
  // Both forms submit with new FormData(form), so every field in the markup
  // is always sent — by the fetch path and by a no-JS native post alike.
  // That means a MISSING field is itself the signal: it says the request did
  // not come from our form at all.
  //
  // This is where spam was getting in. The checks used to run only when the
  // fields happened to be present, so a bot posting JSON straight at this
  // endpoint with nothing but a name, an email and a message skipped both of
  // them and was forwarded like anything else.
  //
  // Everything below looks successful rather than returning an error, so a
  // bot gets no signal to tune against and no reason to retry.
  const quietlyDrop = (reason) => {
    console.warn('Dropped a submission', { reason, form: fields.form ?? 'unknown' });
    return wantsJson ? json({ ok: true }) : redirect('/thank-you');
  };

  // 1. The form's own fields must be there at all.
  if (typeof fields._gotcha !== 'string' || typeof fields._t !== 'string') {
    return quietlyDrop('not_from_our_form');
  }

  // 2. Honeypots: fields nobody can see and bots fill anyway. Two of them,
  //    because _gotcha is a well-known name that better bots skip, while a
  //    field called "url" is one they reach for.
  for (const name of ['_gotcha', 'url']) {
    if (typeof fields[name] === 'string' && fields[name].trim() !== '') {
      return quietlyDrop(`honeypot:${name}`);
    }
  }

  // 3. Time to submit. Empty means scripting was off and nothing filled it,
  //    which is fine — the field being present is what mattered. There is
  //    deliberately no upper bound: leaving a tab open overnight and sending
  //    in the morning is a real thing people do.
  const started = Number(fields._t);
  if (fields._t !== '' && (!Number.isFinite(started) || Date.now() - started < 2500)) {
    return quietlyDrop('too_fast');
  }

  // 4. Where it was sent from. A browser sets Origin on a cross-origin post,
  //    so a wrong one is conclusive; an absent one is not, and same-origin
  //    posts legitimately omit it.
  const origin = req.headers.get('origin');
  if (origin) {
    const allowed = ['https://advrt.co.uk', 'https://www.advrt.co.uk', 'https://advrt-site.netlify.app'];
    if (!allowed.includes(origin)) return quietlyDrop(`bad_origin:${origin}`);
  }

  delete fields._gotcha;
  delete fields._t;
  delete fields.url;

  // ---- Validate -------------------------------------------------------
  const name = String(fields.name ?? '').trim();
  const email = String(fields.email ?? '').trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2 || !emailOk) {
    return json(
      { ok: false, error: 'validation', message: 'Add your name and a valid email address.' },
      422,
    );
  }

  // ---- Forward --------------------------------------------------------
  const form = String(fields.form ?? 'unknown');

  // The contact form has its own hook. Anything else, including the brief,
  // goes to the enquiry hook — and so does contact if its own is not set,
  // because losing a message is worse than filing it in the wrong place.
  const target =
    (form === 'contact' ? process.env.CONTACT_WEBHOOK_URL : '') ||
    process.env.ENQUIRY_WEBHOOK_URL;

  // A link-stuffed message is the shape almost all contact spam takes. This
  // is a guess rather than a certainty, so it never drops anything — it tags
  // the payload and lets the CRM file it for a look. A lead quietly binned by
  // a heuristic costs far more than one in the wrong folder.
  const links = (String(fields.message ?? '').match(/https?:\/\/|www\./gi) ?? []).length;

  const payload = {
    form,
    submittedAt: new Date().toISOString(),
    ...(links >= 3 ? { suspectedSpam: true, suspectedSpamReason: `links:${links}` } : {}),
    source: {
      page: String(fields.page ?? ''),
      referrer: req.headers.get('referer') ?? '',
      userAgent: req.headers.get('user-agent') ?? '',
      // Netlify geo header, where available — useful for routing in the CRM.
      country: req.headers.get('x-nf-geo-country') ?? '',
    },
    fields,
  };

  if (!target) {
    // Not configured yet. Say so plainly rather than silently dropping a lead.
    console.error('No webhook is configured — enquiry was not forwarded', { form, email });
    return json(
      {
        ok: false,
        error: 'not_configured',
        message:
          'We could not submit the form just now. Please email team@advrt.co.uk or call 0800 689 3759 and we will pick it up straight away.',
      },
      503,
    );
  }

  try {
    const headers = { 'content-type': 'application/json' };
    if (process.env.ENQUIRY_WEBHOOK_TOKEN) {
      headers.authorization = `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}`;
    }

    const res = await fetch(target, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error('Webhook rejected the enquiry', res.status, await safeText(res));
      return json(
        {
          ok: false,
          error: 'upstream',
          message:
            'We could not submit the form just now. Please email team@advrt.co.uk or call 0800 689 3759.',
        },
        502,
      );
    }
  } catch (err) {
    console.error('Webhook request failed', err);
    return json(
      {
        ok: false,
        error: 'upstream',
        message:
          'We could not submit the form just now. Please email team@advrt.co.uk or call 0800 689 3759.',
      },
      502,
    );
  }

  return wantsJson ? json({ ok: true }) : redirect('/thank-you');
};

export const config = { path: '/api/enquiry' };

/* ---- helpers --------------------------------------------------------- */

function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra },
  });
}

function redirect(location) {
  return new Response(null, { status: 303, headers: { location, 'cache-control': 'no-store' } });
}

async function safeText(res) {
  try {
    return (await res.text()).slice(0, 500);
  } catch {
    return '<unreadable>';
  }
}
