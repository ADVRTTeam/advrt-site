# Rebuild scope — ADVRT night system (Direction C)

Source of truth: the **night system** row of the
[ADVRT Built Environment · Agency Site](https://claude.ai/artifact/VXE3uY8ZmokYt8kAwEEH2H)
canvas — 13 artboards under the note *"ADVRT night system · full site (Direction C)"*.

This replaces the whole of the current build. Same repo, same Netlify project.

---

## 1. What the canvas now contains

Four rows, only one of which is in scope:

| Row | Boards | Status |
|---|---|---|
| Original (y=0) | Main, 6 sectors, Brief, Contact, Blog, BlogPost | **Superseded** — this is what's deployed today |
| v2 proposal (y=8499) | SystemV2, HomeV2 | Exploration, not the chosen direction |
| **Night system (y=17008)** | **HomeC + 12 others** | **In scope** |
| GetADVRTISE (y=25499) | GetAdvrtise, GetAdvrtiseFit | Different site (getadvrtise.com) — **not in this scope** |

### Pages in scope → routes

| Board | Route | Notes |
|---|---|---|
| HomeC | `/` | |
| SurveyorsC | `/surveyors` | |
| ArchitectsC | `/architects` | |
| ContractorsC | `/contractors` | |
| ComplianceC | `/compliance` | |
| TrainingC | `/training` | |
| BuiltEnvironmentC | `/built-environment` | |
| BriefC | `/start-a-project` | |
| ContactC | `/contact` | |
| BlogC | `/insights` | |
| BlogPostC | `/insights/[slug]` | |
| PolicyC | `/privacy`, `/cookies`, `/terms`, `/accessibility`, `/complaints` | One board, five documents |
| NotFoundC | `/404` | |
| — | `/thank-you` | No board; existing page restyled (no-JS form fallback) |

Every existing route is preserved. Three legal routes are new, so nothing
that is indexed today breaks.

---

## 2. What actually changes

### The design system — replaced wholesale

| | Current | Night system |
|---|---|---|
| Ground | `#0b0b0c` with alternating cream `#f2f0ea` sections | `#050506` throughout, no light sections |
| Text | `#f2f0ea` | `#eceae3`, muted `#a7a49b` / `#8a877f` / `#5d5b54` |
| Accent | `#ff5a1f` as flat fills and highlight blocks | Same orange, used as **glow** — text-shadow and box-shadow |
| Display type | Archivo 900, stretch 115–118% | Archivo 850, stretch 104% — less compressed |
| Buttons | Square, arrow in a box | Pills (999px) with orange bloom |
| Nav | Full-width bar | Floating centred pill, blurred, Sectors dropdown |
| Sections | "Scene sheets" sliding over one another | Flat, divided by hairline rules |
| Footer | 4 columns | 4 columns + bio + social pills + company/trade-mark line |

Essentially **all CSS and all page templates are thrown away**. The tokens,
layout primitives and component classes are new.

### New page mechanics — the real work

1. **Hero** — three CSS starfield layers, two shooting stars, a curved
   horizon with an orange rim, and an **inline SVG city skyline**: 13
   buildings that pop up in sequence, twinkling windows, blinking beacons and
   two swaying crane jibs. Plus a staged headline "relay" where *builds*
   flashes orange and hands off to *built environment*. Replays when the hero
   re-enters view.
2. **Manifesto** — a sticky pinned section where the text lights up
   **word by word** against scroll progress.
3. **Stacked work panels** — sticky full-bleed case-study panels with
   scroll-driven parallax on the images.
4. **Sector rows** — hover reveals a giant outlined number behind each row.
5. **Process timeline** — a vertical line that draws itself on scroll.
6. **Policy page** — five documents behind a switcher, with a sticky section
   index.
7. **Cursor glow + film grain** — a pointer-following radial bloom and a
   fixed noise overlay, site-wide.

### What carries over

Roughly 40% of the work is already done and stays:

- Astro project, build pipeline, image optimisation, font subsetting
- All 10 photographic assets (**no new assets** — I checked the canvas)
- The enquiry Netlify Function and webhook wiring, untouched
- The 10 articles (content stays; new chrome around it)
- `netlify.toml` headers, caching, redirects; sitemap; RSS
- Sector copy, which is close to the current data
- The SEO work: meta patterns, schema, interlinking

---

## 3. Policies — now real

The canvas carries **fully written** privacy, cookie, terms-of-business,
accessibility and complaints documents, as **ADVRT Marketing Ltd**, with the
registered office and trade-mark notices.

This resolves most of `OUTSTANDING.md` item 3. Two things still needed:

- **Company registration number** — not in the canvas, still required on the
  footer and in the policies.
- The privacy policy states that cookies and analytics **are** used. The
  current site sets no cookies and has no banner. See the question below.

---

## 4. Performance — honest assessment

The night system is heavier than what it replaces. Current production:
CLS 0, LCP < 200ms, ~9KB JS, 5–9 requests.

Costs being added:

| Feature | Cost | Mitigation |
|---|---|---|
| Cursor glow rAF loop | Runs continuously | Transform-only (compositor); already off on coarse pointers; I'll idle it when the pointer stops |
| Film grain | Full-screen fixed overlay | Static SVG data-URI, no repaint on scroll |
| Starfield + city SVG | ~40 animated nodes | Inline, no requests; opacity/transform only |
| Nav `backdrop-filter` | Can be costly on mobile GPUs | Small element; measure and reduce blur radius if needed |
| Sticky + parallax panels | Scroll-timeline driven | Compositor-friendly |
| Word-by-word manifesto | Per-frame scroll read | Direct class toggling, no framework re-render |

**Target: hold CLS 0 and keep JS under ~15KB.** LCP should be unchanged —
the hero's largest element is still text. I'll measure before deploying and
report real numbers, as last time.

---

## 5. Build order

1. New token layer and global stylesheet; retire the old one
2. Shell — pill nav with dropdown, footer, grain, cursor glow
3. Home: hero (starfield, city SVG, headline relay), manifesto, proof,
   stacked work, sectors, timeline, fit, Jack, CTA
4. Sector template × 6 from the shared layout
5. Brief and Contact, rewired to the existing function
6. Insights index and article template
7. Policy pages × 5, plus 404 and thank-you
8. Verify: audit, Core Web Vitals, keyboard and reduced-motion passes
9. Deploy to `advrt-site.netlify.app`

Work happens on a `night-system` branch so the current site stays up until
you've seen the new one.

---

## 6. Decisions — settled 10 Nov 2026

1. **GetADVRTISE** — out of scope. advrt.co.uk only, this repo, the
   `advrt-site` Netlify project. GetADVRTISE gets its own repo as a follow-up.
2. **"Ex-RICS media buyers"** — Jack's earlier instruction stands:
   "industry-specialist team", with the supporting line reworded. The canvas
   reuses the old wording, so this is a deliberate, recorded deviation.
3. **The 10 articles** — kept as they are. Only the index and article
   templates are restyled. I reconcile against BlogC/BlogPostC if the boards
   name different titles.
4. **Analytics and consent** — GA4 behind a proper UK GDPR/PECR consent
   banner. Nothing non-essential loads before consent. **Needs the GA4
   measurement ID**; until it is set the banner ships and analytics stays
   dormant, so the privacy policy is accurate from launch.

### Still needed from ADVRT

- **Company registration number** — for the footer and the policies
- **GA4 measurement ID** — `PUBLIC_GA4_ID`
- `ENQUIRY_WEBHOOK_URL` — still outstanding from the first build
