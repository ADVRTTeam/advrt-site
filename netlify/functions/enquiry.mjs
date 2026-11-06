/**
 * Enquiry forwarder for the brief and contact forms.
 *
 * Takes a POST from either form, runs two cheap spam checks, normalises the
 * payload and forwards it to ENQUIRY_WEBHOOK_URL. Nothing is stored here.
 *
 * Env:
 *   ENQUIRY_WEBHOOK_URL    required — where enquiries are forwarded
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
  // 1. Honeypot: a field people never see and bots usually fill.
  if (typeof fields._gotcha === 'string' && fields._gotcha.trim() !== '') {
    // Look successful so the bot does not retry.
    return wantsJson ? json({ ok: true }) : redirect('/thank-you');
  }

  // 2. Time-to-submit: a human takes more than a couple of seconds.
  const started = Number(fields._t);
  if (Number.isFinite(started) && Date.now() - started < 2500) {
    return wantsJson ? json({ ok: true }) : redirect('/thank-you');
  }

  delete fields._gotcha;
  delete fields._t;

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
  const target = process.env.ENQUIRY_WEBHOOK_URL;

  const payload = {
    form: String(fields.form ?? 'unknown'),
    submittedAt: new Date().toISOString(),
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
    console.error('ENQUIRY_WEBHOOK_URL is not set — enquiry was not forwarded', {
      form: payload.form,
      email,
    });
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
