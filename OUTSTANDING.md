# Outstanding

Everything here is built and waiting on information or a decision, not on code.
Updated for the night-system rebuild, 10 November 2026.

## 0. How deploys work

Pushing to `main` builds and publishes to production. The Netlify project was
linked to `ADVRTTeam/advrt-site` on 11 November 2026 — until then it had never
been connected to the repo at all, and every deploy since the site was stood up
had come from a zip upload, which is why pushes appeared to do nothing.

Build command and publish directory come from `netlify.toml`, so they are
versioned with the code rather than typed into the Netlify UI. Environment
variables are not: they live on the project. So anywhere below that says
"redeploy", the step is a push, and anywhere that says "set a variable", the
step is the Netlify UI followed by a push.

## 0b. The weekly content run needs scheduling from the UI

`.claude/skills/weekly-content/` is written and committed. What is missing is
the routine that fires it every Monday, and it cannot be created from a Claude
Code session: scheduled tasks made that way cannot carry account connectors on
this organisation, so the run would start with no Search Console and no image
generation.

Create it in the claude.ai routines UI with the Windsor.ai and AIBox connectors
attached. The schedule, settings and the exact prompt are in
`.claude/skills/weekly-content/SCHEDULING.md`.

It starts in REVIEW mode — output arrives as a pull request. After about a
month of output worth trusting, change the mode line in the skill to AUTOPILOT
and it pushes to `main`, which deploys.

## 1. Enquiry webhook

**Status:** configured and tested, 11 November 2026. `ENQUIRY_WEBHOOK_URL` is
set on the Netlify project and points at the GoHighLevel inbound webhook.
`ENQUIRY_WEBHOOK_TOKEN` is unset and not needed — the GoHighLevel hook URL
carries its own capability token.

**The URL is deliberately not in this repository.** This repo is public, and a
GoHighLevel inbound hook URL is a capability: anyone holding it can post
arbitrary leads into the CRM. It lives only in the Netlify environment.

**Two things worth tightening**, neither of which this project's plan allowed
through the API — both are a few clicks in **Netlify → Project configuration →
Environment variables**:

- **Mark it secret.** It currently stores with `is_secret: false`, so the value
  is readable in the Netlify UI and would appear in build logs if anything ever
  echoed it.
- **Scope it to Functions.** It is currently scoped to builds, functions,
  post-processing and runtime. Only the function reads it. The build scope is
  not a leak — the name has no `PUBLIC_` prefix, so Astro will not inline it
  into client code, and nothing reads it at build time — but there is no reason
  for it to be there.

Env vars are injected into functions at deploy time, so a change to either
needs a new deploy (a push) before the function sees it.

**To verify once set:** submit a test brief and a test contact message, and
confirm both land in the CRM with their `form` and `source.page` fields intact.
The brief posts twice — `form: "brief"` when the five steps are sent, then
`form: "brief-call"` with `callSlot` when the call is confirmed.

## 2. GoHighLevel booking widget

**Status:** live. Calendar `aRbzQfigd3sq1fSPs2PD`, embedded on the booking step
of `/start-a-project`, replacing the mock day/time picker.

It mounts only when someone reaches that step, not on page load — the widget
writes to local storage and fingerprints the visitor, so it has no business
running for people who never open the brief. Name, email and phone from step 5
are passed as query parameters and arrive prefilled.

The brief is already POSTed to the enquiry webhook before the calendar appears,
so an enquiry is captured whether or not a call gets booked. The old
`form: "brief-call"` post is gone: GoHighLevel creates the appointment itself,
and the embed emits no booking event we could listen for — the parent script
only handles iframe sizing, query-param forwarding and contact stickiness. So
our button on that step says "I'll book later" and never claims a booking.

**Three things worth a decision:**

1. **The calendar asks for budget again, with different bands.** Ours are Under
   £1k / £1k–£2k / £2k–£5k / £5k+ / Not sure yet. The calendar's are Less than
   £500 / £500–£1000 / £1000–£2000 / More than £2000. Two different answers to
   the same question land in the CRM, and it is a second ask at the worst
   moment. Recommend deleting that question from the calendar form in
   GoHighLevel — the brief already captures it.
2. **It is light-themed inside a dark page.** Deliberate for now, as a white
   card on the dark surface. If the calendar's own styling supports a dark
   theme, matching it would read better.
3. **The widget loads Meta's pixel inside its iframe**, along with Cloudflare
   Turnstile and Google Fonts. That is GoHighLevel's frame rather than ours, so
   the site's consent banner does not gate it. The cookie policy now says the
   calendar loads third-party tracking, but whether that is acceptable without
   consent is a question for whoever reviews the policies.

CSP in `netlify.toml` allows `api.leadconnectorhq.com` in `frame-src` and
`link.msgsndr.com` in `script-src`. Note the `payment=()` in Permissions-Policy:
the embed asks for `allow="payment"` and this overrides it. Fine for a free
discovery call; if the calendar ever takes a deposit, that line needs changing.

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
banner on the live site". Analytics is now live through GTM, so that sentence
needs to become true or be reworded.

## 5. Analytics and consent

**Status:** live, 11 November 2026. Google Tag Manager container
`GTM-TQT8RCN` is the tag host, set in `src/data/site.ts` — a container ID is
public by design, so it is in the repository rather than an environment
variable.

GA4 (`G-D79TGTL0CK`) is already configured inside the container, so the code
does not load GA4 itself: `PUBLIC_GA4_ID` is ignored whenever a container is
set, because running both would double-count every session. **Do not set
`PUBLIC_GA4_ID`.**

Nothing reaches Google before an explicit Accept — verified: a visitor who has
not chosen, and a visitor who rejects, make zero third-party requests. Consent
Mode v2 defaults are pushed on every page load with everything denied, so a tag
added to the container later cannot start from a more permissive state than the
banner granted.

`ad_personalization` stays denied even after Accept. The banner asks to measure
which pages and campaigns produce enquiries, which is measurement, not
remarketing. **If remarketing audiences are ever wanted, the banner copy and
the cookie policy have to say so first** — it is a consent question, not a
switch.

**The one real cost of a strict CSP with GTM:** adding a tag in the GTM
interface is not enough on its own. The policy in `netlify.toml` governs every
tag the container fires, so a tag loading from a host that is not listed is
blocked by the browser and silently does nothing. GA4 works because its hosts
are listed. Google Ads, Meta and LinkedIn tags each need their host adding and
deploying at the same time the tag goes live. The directive block in
`netlify.toml` names which host each one needs.

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
