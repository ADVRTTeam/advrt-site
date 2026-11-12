/**
 * Exercises the spam gate in netlify/functions/enquiry.mjs without sending
 * anything anywhere: fetch is stubbed, so each case reports whether the
 * submission would have been forwarded or quietly dropped.
 *
 * Run with:  node scripts/spam-gate-test.mjs
 */
process.env.ENQUIRY_WEBHOOK_URL = 'https://example.invalid/brief';
process.env.CONTACT_WEBHOOK_URL = 'https://example.invalid/contact';

const mod = await import('../netlify/functions/enquiry.mjs');
const handler = mod.default;

let forwarded = null;
globalThis.fetch = async (url, init) => {
  forwarded = { url, body: JSON.parse(init.body) };
  return new Response('{}', { status: 200 });
};

const base = { form: 'contact', name: 'Real Person', email: 'real@example.com', message: 'Hello, I would like a quote for a survey.' };
const now = Date.now();

async function run(label, fields, headers = {}) {
  forwarded = null;
  const req = new Request('https://advrt.co.uk/api/enquiry', {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json', ...headers },
    body: JSON.stringify(fields),
  });
  const res = await handler(req);
  const body = await res.json().catch(() => ({}));
  const flag = forwarded?.body?.suspectedSpam ? ' [FLAGGED]' : '';
  console.log(
    (forwarded ? 'FORWARDED' : 'dropped  ').padEnd(10),
    String(res.status).padEnd(4),
    JSON.stringify(body).padEnd(14),
    label + flag,
  );
}

console.log('result     code  body           case');
console.log('-'.repeat(78));
await run('bot: direct JSON, no form fields  (THE HOLE)', base);
await run('bot: honeypot _gotcha filled', { ...base, _gotcha: 'http://spam', _t: String(now - 9000), url: '' });
await run('bot: honeypot url filled', { ...base, _gotcha: '', _t: String(now - 9000), url: 'http://spam' });
await run('bot: submitted in 100ms', { ...base, _gotcha: '', _t: String(now - 100), url: '' });
await run('bot: posted from another origin', { ...base, _gotcha: '', _t: String(now - 9000), url: '' }, { origin: 'https://evil.example' });
await run('bot: garbage timestamp', { ...base, _gotcha: '', _t: 'abc', url: '' });
console.log('-'.repeat(78));
await run('real: JS form, 9s to submit', { ...base, _gotcha: '', _t: String(now - 9000), url: '' });
await run('real: no-JS post, empty _t', { ...base, _gotcha: '', _t: '', url: '' });
await run('real: tab left open 3 days', { ...base, _gotcha: '', _t: String(now - 3 * 86400000), url: '' });
await run('real: from our own origin', { ...base, _gotcha: '', _t: String(now - 9000), url: '' }, { origin: 'https://advrt.co.uk' });
await run('real: brief, not contact', { ...base, form: 'brief', _gotcha: '', _t: String(now - 9000), url: '' });
await run('real: message with 4 links', { ...base, _gotcha: '', _t: String(now - 9000), url: '', message: 'see https://a.com https://b.com www.c.com and https://d.com' });
console.log('-'.repeat(78));
console.log('last forwarded went to:', forwarded?.url);
console.log('honeypot fields stripped from payload:', forwarded ? !('_gotcha' in forwarded.body.fields || '_t' in forwarded.body.fields || 'url' in forwarded.body.fields) : 'n/a');
