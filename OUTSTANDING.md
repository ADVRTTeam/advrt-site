# Outstanding

Everything here is built and waiting on information or a decision, not on code.
Updated for the night-system rebuild, 10 November 2026.

## 1. Enquiry webhook

**Status:** built, unconfigured. `netlify/functions/enquiry.mjs` returns 503 and
both forms show the phone number and email address, so nothing is lost silently.

Set in **Netlify → Site configuration → Environment variables**:

| Variable | Purpose |
|---|---|
| `ENQUIRY_WEBHOOK_URL` | Where enquiries are POSTed |
| `ENQUIRY_WEBHOOK_TOKEN` | Optional, sent as `Authorization: Bearer …` |

Read at runtime, so no redeploy is needed.

**To verify once set:** submit a test brief and a test contact message, and
confirm both land in the CRM with their `form` and `source.page` fields intact.
The brief posts twice — `form: "brief"` when the five steps are sent, then
`form: "brief-call"` with `callSlot` when the call is confirmed.

## 2. GoHighLevel booking widget

**Status:** the board marked this `[GHL] GoHighLevel booking widget embeds
here`. Built as the designed day/time picker, which submits the chosen slot with
the brief. The day chips are generated at runtime from the next five weekdays,
so they never go stale on a static build.

Swapping in the real calendar means replacing the picker in the step-5 fieldset
of `src/pages/start-a-project.astro` and adding the GHL host to `frame-src` in
`netlify.toml`, which currently allows no frames at all.

## 3. Company registration number

`src/data/site.ts` has `companyNumber: ''`. It belongs in the footer's legal
line and in the privacy policy and terms. Everything else in the footer's
registered-office line is already correct.

## 4. The five policies

`src/data/policies.ts` carries the privacy policy, cookie policy, terms of
business, accessibility statement and complaints procedure, transcribed from the
board. Each page shows the board's own **"Draft · for legal review before
launch"** badge.

They need a legal review before `advrt.co.uk` is pointed here, and the badge
should come off at that point (it is rendered in `src/pages/[policy].astro`).
The privacy policy is not optional: the site collects personal data through two
forms.

The cookie policy says cookie names and durations are "confirmed in the consent
banner on the live site" — worth making that true once GA4 is switched on.

## 5. Analytics and consent

**Status:** built, unconfigured. `src/components/Consent.astro` renders nothing
at all unless `PUBLIC_GA4_ID` is set, because with no analytics there are no
non-essential cookies and asking permission for nothing is worse than not
asking.

Set `PUBLIC_GA4_ID` in Netlify and **redeploy** — it is a build-time variable,
unlike the webhook ones. GA4 is then injected only after an explicit Accept,
with `anonymize_ip` on and Google Signals off. Accept and Reject carry equal
visual weight, as the ICO expects. The cookie policy page offers a "Change
cookie settings" button that clears the stored choice.

The Content-Security-Policy in `netlify.toml` already allows the GA4 hosts.

## 6. Article copy

The ten articles in `src/content/insights/` are a first draft written to match
the board's voice, using only claims the board already makes. Everything else on
the site is ADVRT's own copy, verbatim. Read these before launch.

## 7. Domain

Currently `advrt-site.netlify.app`. When `advrt.co.uk` is pointed here:

- Add the domain in Netlify and update DNS
- Set `SITE_URL` to the live origin and redeploy — it drives canonicals, OG
  tags, the sitemap and the RSS feed
- Update the `Sitemap:` line in `public/robots.txt`
- Submit the sitemap in Google Search Console

## 8. Case study permissions

The site names Huxley Surveyors, Foundation Surveyors and Nicholas & Co with
first-month enquiry figures, and shows screenshots of their sites. All taken
from the board. Worth confirming each is happy to be named before launch.

## 9. Open Graph image

`public/og-default.png` is a generated placeholder built from the brand palette,
and predates the night system. Worth replacing with something designed in the
new look. Per-page OG images could follow.

## 10. GetADVRTISE

Out of scope for this build, by decision on 10 November 2026. Recorded in
`SCOPE-night-system.md`.
