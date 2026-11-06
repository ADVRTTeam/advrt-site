# Outstanding — to sweep once the tech stack is confirmed

Everything here is built and waiting on information or a decision, not on code.

## 1. Enquiry webhook

**Status:** built, unconfigured. The function returns 503 and both forms show the
phone number and email address, so nothing is lost silently.

Set in **Netlify → Site configuration → Environment variables**:

| Variable | Purpose |
|---|---|
| `ENQUIRY_WEBHOOK_URL` | Where enquiries are POSTed |
| `ENQUIRY_WEBHOOK_TOKEN` | Optional, sent as `Authorization: Bearer …` |

Payload shape and the two-stage brief submission are documented in `README.md`.
No redeploy needed — these are read at runtime.

**To verify once set:** submit a test brief and a test contact message, confirm
both land in the CRM with their `source.page` and `form` fields intact.

## 2. GoHighLevel booking widget

**Status:** the canvas marked this `[GHL] GoHighLevel booking widget embeds
here`. Built as the designed day/time picker, which submits the chosen slot with
the brief.

Set `PUBLIC_GHL_CALENDAR_URL` to the calendar embed URL and the iframe replaces
the picker automatically (`src/pages/start-a-project.astro`).

**Note:** the CSP in `netlify.toml` currently allows no third-party frames. Add
the GHL host to `frame-src` when the calendar goes in, or the iframe will be
blocked.

## 3. Privacy notice and terms of use

**Status:** written to describe what this site actually does, with
`[SQUARE BRACKET]` placeholders for the facts only ADVRT can supply.

`src/pages/privacy.astro` needs:
- Company registration number
- ICO registration reference
- CRM name (the webhook destination)
- Email / messaging provider used for acknowledgements
- Retention periods for non-client enquiries and client records

`src/pages/terms.astro` needs:
- Company registration number

Both need a legal review before a custom domain is pointed here. The privacy
notice is not optional — the site collects personal data through two forms.

## 4. Article copy

The ten articles in `src/content/insights/` are a first draft written to match
the canvas's voice, using only claims the canvas already makes. Everything else
on the site is ADVRT's own copy, verbatim. Read these before launch.

## 5. Analytics and consent

None installed. The site sets no cookies and the privacy notice says so, which
is why there is no cookie banner.

If GA4, GTM or a Meta pixel goes in:
- Add the host to `script-src` and `connect-src` in `netlify.toml`
- Add a consent banner — these are non-essential cookies under UK GDPR/PECR
- Update the Cookies section of `src/pages/privacy.astro`

## 6. Domain

Currently `advrt-site.netlify.app`. When `advrt.co.uk` is pointed here:
- Add the domain in Netlify and update DNS
- Set `SITE_URL` to the live origin and redeploy — it drives canonicals, OG
  tags, the sitemap and the RSS feed
- Update the `Sitemap:` line in `public/robots.txt`
- Submit the sitemap in Google Search Console

## 7. Case study permissions

The site names Huxley Surveyors, Foundation Surveyors and Nicholas & Co with
first-month enquiry figures, and shows screenshots of their sites. All taken
from the canvas. Worth confirming each is happy to be named before launch.

## 8. Open Graph image

`public/og-default.png` is a generated placeholder built from the brand palette.
Worth replacing with something designed. Per-page OG images could follow.
