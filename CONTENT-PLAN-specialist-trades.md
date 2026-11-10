# Content plan — cohort 2: the specialist trades

Drafted 10 November 2026, revised after review. For sign-off, not yet written.

The first ten articles argue the ADVRT method: cost per instruction, exclusive
versus shared leads, attribution, forms, response speed. They are sector-light
on purpose. This cohort goes the other way — one trade at a time, each piece
earning its traffic from the way that trade's buyers actually search.

---

## 0. Two rules this plan is written under

**Spray foam and insulation removal are out of scope.** ADVRT has an exclusive
agreement with a lead buyer in that market, and publishing marketing advice
aimed at his competitors would breach the spirit of it. Nothing derived from
`gogreenquote.com` appears below — no spray foam, no loft insulation removal.
I have also left out heat pumps and retrofit, which sit on the same brand; if
the exclusivity is narrower than that, say so and they can come back, because
`heat pump quotes` is real demand (285 impressions).

**The audience is the firms, not their customers.** The search data is what an
*end buyer* types — the landlord who needs a TM44, the duty holder facing a
Reg 4 obligation. ADVRT's readers are the firms that serve them. So the data is
the subject, never the audience. Every piece reads as:

> "Here is what your buyers typed into Google last year. Here is where that
> demand went. Here is why your website did not catch it."

Nothing in this cohort should rank for `tm44 inspection near me`. It should
rank for `tm44 leads`, `air conditioning inspection marketing`, and be the
piece an air conditioning company's owner finds when they go looking for growth.

---

## 1. On search volume: what I could and could not get

You asked for Google Keyword Planner volume through Windsor. **It is not
reachable, for two separate reasons, and I would rather say so than present
estimates as if they were measured.**

1. **No Google Ads account is connected to Windsor.** Only Search Console is.
   The connector returns: *"No google_ads accounts are configured for
   jackadvrtcouk."*
2. **Even connected, it would not give Keyword Planner volume.** Windsor's
   `google_ads` connector is a *reporting* connector — impressions, clicks,
   cost and conversions for keywords you are already bidding on. Keyword
   Planner's monthly search-volume estimates come from a different Google Ads
   API service that Windsor does not surface. Nor is Semrush, Ahrefs or SE
   Ranking connected, any of which would.

**What I used instead, and why it is arguably better.** Twelve months of Google
Search Console impressions from ADVRT's own brands. An impression means the
query was searched *and* the site was eligible to appear — so for a site
sitting at position 20–80, impressions are a real, conservative floor under
actual volume, measured on real UK searches rather than modelled.

**If you want true volume alongside it**, pick one:

- **Connect Google Ads to Windsor** — gives the search-term report from ADVRT's
  own campaigns: the exact queries that triggered ads, with impressions and
  conversions. Better intent data than Keyword Planner, though still not
  "volume". Connect at `onboard.windsor.ai?datasource=google_ads`.
- **Connect Semrush, Ahrefs or SE Ranking** — all supported by Windsor, all
  give keyword volume directly. This is the one I would choose.
- **Pull Keyword Planner by hand** in the Google Ads UI and paste the numbers;
  I will fold them in.

---

## 2. Where the numbers come from

| Property | What it sells | Used for |
|---|---|---|
| `comsurv.uk` | Commercial surveying and compliance | Asbestos, TM44, fire, legionella, EICR, EPC, PPM |
| `greenwashrooms.co.uk` | Washroom services | Recurring-contract services |
| `advrt.co.uk` | The agency itself | What ADVRT ranks for today |
| ~~`gogreenquote.com`~~ | ~~Insulation removal~~ | **Excluded — see §0** |

Plus Koalr's AI-search tracking, which shows which prompts competitors are
cited for and ADVRT's brands are not.

### The headline finding

Across every non-branded query on the lead-gen brands, **clicks are almost
exactly zero** against thousands of impressions, at average positions between
17 and 80. The demand is measurable and nobody is capturing it. That finding
*is* an article, and it is the spine of the cohort.

### Demand by discipline

12-month totals, non-branded queries only.

| Discipline | Impressions | Avg position | Read |
|---|---:|---:|---|
| **Asbestos** | ~3,000 | 17–31 | Biggest cluster. Compliance- and deadline-driven. |
| **Fire safety** | 2,417 | 15–89 | Widest query set — 336 distinct queries. |
| **Air conditioning / TM44** | 961 | 16–50 | A legal inspection almost nobody markets against. |
| **Legionella / water hygiene** | 669 | 27–90 | Worst positions on the list. Wide open. |
| **Planned maintenance / PPM** | ~370 | 38–78 | Contract work, not job work. |
| **Electrical / EICR** | 197 | 20–95 | Small, high-intent. C1/C2/C3 is a clear gap. |
| **Commercial EPC / MEES** | 111 | 12–89 | Small now, regulation-driven growth ahead. |

### What those buyers are actually asking

| Intent | Queries | Impressions | Avg position |
|---|---:|---:|---:|
| Price / quote (`legionella risk assessment cost`) | 67 | 574 | 53.0 |
| Compliance obligation (`is legionella testing a legal requirement`) | 43 | 292 | 56.7 |
| Who do I hire (`best…`, `…companies`) | 27 | 67 | 30.3 |

**Price and obligation questions outnumber "who do I hire" by three to one**
and rank about twenty positions worse. Buyers research the rule and the cost
long before they look for a contractor — which is the single most useful thing
ADVRT can tell these firms, with evidence.

---

## 3. The cohort

Twelve pieces, in publishing order.

### Tier 1 — clearest data, publish first

**1. The £0 click problem: 12 months of search data from our own trade brands**
*Pillar · ~1,800 words · all trades.* Thousands of impressions, near-zero
clicks, positions 17 to 80. What it costs to be on page three for a query a
buyer types with their card out. Everything else links back here.
Target: `why isn't my website getting leads`, `page 2 google no traffic`.

**2. TM44: a legal inspection almost nobody markets**
*~1,300 words · air conditioning and ventilation.* 961 impressions across 51
TM44 variants, best position 16. Every system over 12kW needs one every five
years and the firms that do them are invisible for the term. Easiest win here.
Target: `tm44 leads`, `air conditioning inspection marketing`.

**3. Asbestos surveys: the biggest search cluster in compliance**
*~1,600 words.* ~3,000 impressions. Two distinct buyers — the duty holder with
a Reg 4 obligation and the developer who needs a refurbishment and demolition
survey before work starts. They need different pages; most firms give them one.
Target: `asbestos survey leads`, `asbestos marketing`.

**4. Legionella: the worst-ranked compliance work we track**
*~1,300 words · water hygiene.* 669 impressions at positions 27 to 90.
`legionella risk assessment cost` alone is 152 impressions at position 76.
`is legionella testing a legal requirement` is a buyer who does not yet know
they are obliged.
Target: `legionella risk assessment leads`, `water hygiene marketing`.

**5. Fire safety: 336 ways people ask for the same two services**
*~1,500 words.* `fire risk assessment` at 565 impressions, then a long tail on
extinguisher types, servicing cost and review frequency. How to structure a
site when the head term is competitive and the tail is not. **Promote this to
first after the spine piece** — it is now the lead support for the new
`/fire-protection` page, and fire is the sector you most want to win.
Target: `fire risk assessment leads`, `fire safety marketing`,
`lead generation for fire protection companies`.

### Tier 2 — the smaller trades

**6. C1, C2, C3: the EICR questions your buyers ask before they call**
*~1,100 words · electrical.* A cluster at positions 79 to 95, all about
interpreting a report someone has already had. Answering it is how a contractor
becomes the firm they call for the remedial work.
Target: `electrical contractor leads`, `eicr marketing`.

**7. MEES and the commercial EPC: a regulation-shaped pipeline**
*~1,200 words · EPC assessors.* The smallest cluster today and the one with a
legislated growth curve: `commercial epc upgrade strategy`, `minimum epc rating
commercial uk`, `new epc regulations 2025 commercial property`.
Target: `commercial epc leads`, `mees marketing`.

**8. PPM: selling the survey that sells the contract**
*~1,200 words · facilities and maintenance.* `planned preventative maintenance`
and `ppm survey` at positions 38 to 78. The survey is a loss-leader for a
multi-year contract, which changes what the page and the form should do.
Target: `ppm leads`, `facilities maintenance marketing`.

### Tier 3 — cross-cutting

**9. Why price and regulation questions beat "near me" in the trades**
*~1,200 words.* The intent split above. The case for cost and compliance pages
over another location page.

**10. One page per specialism, not a services list**
*~1,100 words.* Companion to cohort 1's landing-page article, with trade
evidence: a damp survey and an air conditioning install are bought by different
people for different reasons and cannot share a page.

**11. What AI search already cites in your trade — and what it doesn't**
*~1,400 words.* From Koalr. On commercial surveying, Savills, Knight Frank and
Workman win prompts ADVRT's brand is absent from entirely. What gets a
specialist firm cited.
Target: `AI search built environment`, `geo for contractors`.

**12. Recurring contracts: marketing a service nobody searches for twice**
*~1,200 words · washroom, PPM, maintenance.* When the work is a contract rather
than a job, search behaviour inverts: one decision, then years of silence.

---

## 4. Protecting the rankings you already have

This is the part with a deadline on it. **The moment advrt.co.uk points at the
new site, every old URL 404s unless it is handled.** Twelve months of Search
Console shows what is at stake.

### Done — redirects are in `netlify.toml`

Topical matches, where the destination genuinely answers the query:

| Old path | Impressions | Pos | → | Why |
|---|---:|---:|---|---|
| `/blog-posts/google-ads-for-uk-training-providers` | 1,040 | 20.7 | `/training` | Ranks for `google ads training`, `google ads certification training provider in uk` |
| `/blog-posts/leveraging-social-media-advertising-for-training-course-leads` | 776 | 31.8 | `/training` | Best query is `lead generation for training providers` at **position 9.3** |
| `/get-in-touch` | 659 | 8.0 | `/contact` | Same page, new name |
| `/blog-posts` | 237 | 9.4 | `/insights` | Same page, new name |
| `/case-studies/703-leads-…-training-provider` | 189 | 9.6 | `/training` | Training case study |
| `/cookie-policy` | 155 | 10.9 | `/cookies` | |
| `/privacy-policy` + `/privacy-cookie-policy` | 148 | ~7.5 | `/privacy` | |
| `/portfolio`, `/case-studies`, `/case-studies/*` | ~190 | ~9.5 | `/#work` | |
| `/our-service` | 80 | 7.6 | `/#process` | |
| `/blog-posts/*` (catch-all) | ~480 | — | `/insights` | Covers posts below the reporting threshold |

### Decided — the three legacy service pages

**`/lead-generation` is kept as a real page.** Built and live. The data backs
the call: it ranks at **position 1.7 for `lead generation`** itself, plus
`lead generation companies` (position 4), `lead generation digital marketing
agency` (1.6) and — the useful one — `lead generation for fire protection
companies`. Its redirect is removed and it is now a proper page in the night
system: what lead generation usually means versus owning the asset, the five
stages, and a link to all seven sectors with `hasOfferCatalog` schema.

**`/google-ads` and `/facebook-ads` are redirected to `/` and allowed to
fade.** They rank for town-level `google ads <place>` and for `scroll sauce`
and `digital hot sauce`. Wrong audience, wrong positioning, not worth the
pages.

### Decided — the Southampton and generic agency terms

You asked for my lead on these, so: **I would not chase them.**

The homepage carries ~205,000 impressions for terms like `marketing agency
southampton` (6,188 impressions, position 9.6, 23 clicks), and those will fade.
That is the right trade. Holding them means keeping homepage copy about being a
Southampton marketing agency, which is the opposite of the positioning the
whole site now argues — and the traffic they bring is local SMEs looking for a
general agency, which is not who ADVRT sells to. 23 clicks in twelve months is
also not much to defend.

What I have kept instead, because it costs nothing: the Southampton postal
address stays in the footer and in the `Organization` schema, so the local
signal survives for anyone searching ADVRT by name or looking for a nearby
supplier. If a local enquiry matters, it will still find you.

**The service-provider terms are the better target, and the data agrees.**

| Query | Impressions | Position |
|---|---:|---:|
| `lead generation` | 37 | **1.7** |
| `lead generation for training providers` | 45 | **9.3** |
| `lead generation agency` | 42 | 16.4 |
| `lead generation companies` | 8 | 4.0 |
| `digital marketing for tree surgeons` | 5 | 10.6 |
| `lead generation for fire protection companies` | 4 | 38.3 |
| `digital marketing for carpenters` | 2 | 7.0 |
| `marketing for tradespeople` | 2 | 9.5 |
| `fire protection industry lead generation services` | 2 | 37.0 |
| `digital marketing for roofers` | 1 | 1.0 |

Individually tiny. Collectively the shape of the whole opportunity: nobody
targets `marketing for <trade>`, so ADVRT ranks 1–10 on pages that barely
mention it. **Seven sector pages, each titled `Marketing for <sector>`, is
exactly the right structure for this** — and it is already built.

### Done — fire protection is now its own sector

`/fire-protection` is live. It earns a page on two grounds: it is the largest
category on the compliance brand (2,417 impressions across 336 distinct
queries), and ADVRT already ranks — badly, at positions 37–38 — for
`lead generation for fire protection companies` and `fire protection industry
lead generation services` with no dedicated page at all. A page targeting
those should move quickly.

It sits between compliance and specialist contractors, as you said, so it is
ordered between them in the nav and on the homepage. Like compliance and
training it carries a disciplines section, because fire is five different sales
in a trench coat: risk assessments, extinguishers, alarms and detection,
emergency lighting, passive protection — each with its own buyer and trigger.

### The question you raised: how micro before the structure breaks

Worth answering properly, because you are right that it has a limit.

**Seven is comfortable. The ceiling is about nine, and it is the homepage that
breaks first, not the nav.** Measured:

- **Nav dropdown** — 7 items, 356px tall, fits at every width with room for
  roughly 15 before it runs off a 900px screen. Not the constraint.
- **Footer** — a single column list, scales indefinitely.
- **Homepage sector rows** — a numbered list, one per row. At 7 it reads as a
  considered set. At 10 it reads as a directory, and the "one discipline"
  argument the page makes starts to undercut itself.
- **Sector cross-links** — the "other sectors" grid is now 6 cards. Past about
  8 it wants to become two rows of small cards rather than one.

So if a ninth or tenth sector is ever wanted, the move is to **group them**:
two or three parent groups (say Property professionals / Compliance and
inspection / Trades and contractors) with the sectors nested underneath, in
both the nav and the homepage. That is a presentation change only — the sector
data, templates, schema and sitemap all stay as they are, because everything is
driven from `src/data/sectors.ts`.

**My recommendation: stop at seven for now.** Add an eighth only when there is
the same quality of evidence there was for fire protection — measurable demand
on a brand you own, plus terms you already rank for without a page.

## 5. SEO practice — what is in place, and what I changed today

**Already in place:** canonical on every page; one `h1` per page; no
heading-level jumps; `sitemap-index.xml` with `/thank-you` excluded as
noindex; generated `robots.txt` that follows `SITE_URL`; `llms.txt` and
`llms-full.txt`; RSS; Open Graph and Twitter cards on every page; per-article
share images; JSON-LD for `Organization`, `WebSite`, `ProfessionalService`,
`Service`, `BreadcrumbList`, `FAQPage`, `BlogPosting`, `Person`, `ContactPage`
and `WebPage`; every sector page titled `Marketing for <sector>` with the lede
carrying `lead generation for <sector>`.

**Changed today:**

- **Legacy redirects** — the table in §4.
- **Descriptive internal anchor text.** Every internal link to a sector page
  used to say just "Surveyors". Links from articles and from the sector
  cross-links now carry the phrase that page targets — "Marketing for
  specialist contractors" — so what points at a page agrees with what the page
  claims. Driven from one helper, `anchorFor()`, so the anchor and the title
  can never drift apart.
- **Article Open Graph** — `article:published_time`, `article:modified_time`,
  `article:author` and `article:section` were missing.
- **Organization logo** as a proper `ImageObject` node, referenced by `@id`.

**Worth doing next, in order:**

1. **Google Search Console for the new property.** Submit the sitemap on day
   one and baseline `marketing for surveyors` and the five siblings — there is
   currently *no impression volume at all* against any of them, so everything
   from here is measurable gain.
2. **Decide §4's three pages** before the domain is pointed.
3. **`dateModified`** currently mirrors `datePublished`. Once articles start
   being revised, wire it to a real `updated` frontmatter field.

---

## 6. What I need from you before writing

1. **Confirm the exclusivity boundary.** Spray foam and insulation removal are
   out. Does that extend to heat pumps and retrofit, which share the brand?
2. **Which trades matter commercially.** The data says asbestos, TM44 and fire.
   If ADVRT would rather sell to, say, legionella firms, the order changes.
3. **Permission to publish the figures.** Every piece quotes real impression
   counts and positions from ADVRT's own properties. It is the strongest thing
   here and I would not publish it without a yes. The brands can stay unnamed
   ("our own trade brands") if you prefer.
4. ~~The three legacy pages in §4, and the Southampton signal.~~ **Decided —
   see §4.** `/lead-generation` kept and built, the other two redirected, the
   local terms let go in favour of the service-provider ones.
5. **The fire protection page.** It is live at `/fire-protection` and written
   from the search data rather than from a briefing. Read it before it is
   promoted anywhere — particularly the five disciplines, where I have made a
   call on who buys each one and what triggers it.
