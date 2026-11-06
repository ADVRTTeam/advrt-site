# ADVRT — advrt.co.uk

Marketing site for ADVRT: paid media and lead generation for the built environment.

Built from the **ADVRT Built Environment · Agency Site** design canvas, which is the
single source of truth for every colour, type size, spacing value and piece of copy
on this site.

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7, static output |
| Styling | Hand-written CSS with design tokens in `src/styles/global.css` |
| Interactivity | Vanilla TypeScript islands — no UI framework |
| Content | Astro content collections (markdown) for `/insights` |
| Images | Astro `<Image>` → responsive WebP via sharp, at build time |
| Fonts | Archivo Variable, self-hosted and subset |
| Hosting | Netlify (static) + one Netlify Function for form submissions |

### Why no framework

Every interactive piece — the nav, the hero canvas, the sector calculators, the
six-step brief — is plain DOM code. Astro inlines it per page, so the site ships
roughly 5–9 KB of JavaScript in total rather than the ~45 KB a framework runtime
would cost before any of our own code.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build && npm run preview
```

## Project layout

```
src/
  assets/images/      Source images; Astro emits optimised WebP
  components/         Nav, Footer, Marquee, HeroCanvas
  content/insights/   Blog articles (markdown + frontmatter)
  data/               All page copy and config, lifted from the design canvas
  layouts/            Base (SEO/meta/JSON-LD), Legal
  lib/images.ts       Name → ImageMetadata registry
  pages/
    index.astro           Home
    [sector].astro        Six sector pages from src/data/sectors.ts
    start-a-project.astro The brief
    contact.astro         Contact
    insights/             Index, article template, RSS
    privacy, terms, thank-you, 404
  styles/global.css   Design tokens and shared component classes
netlify/functions/
  enquiry.mjs         Receives both forms, forwards to the CRM webhook
```

### Adding an article

Drop a markdown file in `src/content/insights/`. The filename becomes the URL.
Frontmatter is validated against the schema in `src/content.config.ts`:

```yaml
---
title: 'Your headline'
excerpt: 'One sentence for the card and the meta description.'
topic: 'Strategy'          # becomes a filter chip on /insights
date: 2026-11-06
mins: 6
takeaways:                 # optional; renders the dark summary box
  - 'First point.'
draft: false               # true keeps it out of the build
---
```

A markdown blockquote renders as the design's pull quote. For the mid-article
call to action, paste the `<div class="ctarow">…</div>` block from an existing
article.

### Adding or editing a sector page

Everything lives in `src/data/sectors.ts`. Add an entry and the route, nav,
sitemap and schema follow automatically. Two variants are supported:

- `calc.kind: 'shared'` — the comparison-site odds calculator (Surveyors)
- `calc.kind: 'pipeline'` — enquiries-needed calculator (everyone else)

Add a `disciplines` block and the page gains the tabbed disciplines section and
renumbers its sections automatically.

## Forms

Both the brief and the contact form POST to `/api/enquiry`, which is
`netlify/functions/enquiry.mjs`. It validates, runs two spam checks (honeypot and
time-to-submit), then forwards a JSON payload to `ENQUIRY_WEBHOOK_URL`.

Set these in **Netlify → Site configuration → Environment variables**:

| Variable | Required | Purpose |
|---|---|---|
| `ENQUIRY_WEBHOOK_URL` | Yes | Where enquiries are forwarded |
| `ENQUIRY_WEBHOOK_TOKEN` | No | Sent as `Authorization: Bearer …` |
| `PUBLIC_GHL_CALENDAR_URL` | No | GoHighLevel calendar embed for the brief's booking step |
| `SITE_URL` | No | Canonical origin; set when a custom domain goes live |

Until `ENQUIRY_WEBHOOK_URL` is set the function returns 503 and the forms show a
fallback message with the phone number and email address, so no enquiry is lost
silently.

The payload:

```json
{
  "form": "brief",
  "submittedAt": "2026-11-06T13:36:30.047Z",
  "source": { "page": "/start-a-project", "referrer": "", "userAgent": "", "country": "GB" },
  "fields": { "name": "…", "email": "…", "sector": "Surveyors", "work": ["Level 2 surveys"] }
}
```

The brief submits twice: once when the brief is sent (`stage: "brief"`), then
again when the discovery call is booked (`stage: "call"`, with `callSlot`). That
way an abandoned booking step still leaves you with the enquiry.

Both forms work without JavaScript — every control is a real input, and a native
POST redirects to `/thank-you`.

## Performance

Measured on the production build:

- **CLS 0** on every page
- **5–9 requests** per page, no third-party requests at all
- **~5–9 KB JavaScript**, inlined, no render-blocking scripts
- Images served as responsive WebP, sized at build time so nothing reflows
- One self-hosted font file, preloaded, subset to the glyphs and axis ranges
  actually used (88 KB → 48 KB)

The hero's assembling-building animation is a hand-written perspective projector
on a 2D canvas (~3 KB) rather than the Three.js scene in the design, which would
have cost 608 KB. It renders a single static frame when `prefers-reduced-motion`
or Save-Data is set, and stops drawing entirely once scrolled out of view.

## Accessibility

- Every interactive element is a real `button`, `a` or form control
- Tablists use roving tabindex and arrow-key navigation
- The mobile menu is a focus-trapped dialog, closable with Escape
- Visible focus rings throughout; `prefers-reduced-motion` respected
- Colour pairings verified against WCAG AA

## Deployment

Netlify builds from `main`: `npm run build` → `dist`. Headers, caching and the
legacy-URL redirects are in `netlify.toml`.

## Before pointing a custom domain at this

- [ ] Set `ENQUIRY_WEBHOOK_URL` and confirm a test enquiry reaches the CRM
- [ ] Set `SITE_URL` to the live origin and redeploy (drives canonicals, OG tags, sitemap, RSS)
- [ ] Fill the `[SQUARE BRACKET]` placeholders in `src/pages/privacy.astro` and
      `src/pages/terms.astro`, and have both reviewed
- [ ] Read the ten articles in `src/content/insights/` — the copy is a first draft
- [ ] Update the `Sitemap:` line in `public/robots.txt`
