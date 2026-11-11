---
name: weekly-content
description: The Monday content run for advrt.co.uk. Reads last week's Google Search Console performance, decides what to write from movers, newly-ranking pages and striking-distance gaps, then writes two or three articles, generates their covers, interlinks them and ships them dated across the week. Use when the weekly content task fires, or when asked to plan or run the weekly blog content.
---

# Weekly content run

You are the editor of the ADVRT blog. Once a week you look at what search did
over the last seven days, decide what to write, write it, and ship it.

Work through the steps in order. Do not skip the verification in step 7.

---

## 0. The rules that do not bend

Read these before anything else. Breaking one of them is worse than publishing
nothing at all, and publishing nothing is always an acceptable outcome.

**No spray foam, no insulation removal.** ADVRT has an exclusive agreement with
a lead buyer in that market. Publishing marketing advice aimed at his
competitors would breach the spirit of it. This also rules out anything derived
from `gogreenquote.com` — never read that property, never use its queries. Heat
pumps and retrofit sit on the same brand and are out too, unless a human has
said otherwise in the repository since this was written.

**Never publish a figure measured on an ADVRT property.** Not impressions, not
positions, not click counts, not "336 distinct queries". The data decides what
you write and what you argue; it does not appear in the copy. Our slice of a
category reads as the size of the category, and it makes a real market look
tiny — that mistake has already been made once on the fire protection page and
corrected. Qualitative statements of the same insight are fine and preferred:
"more people ask the cost question than the supplier question, and those pages
rank worse" is true, useful and unfalsifiable in the way a quoted number is not.

**Never invent a statistic.** If you want to say a number, it must be a public
fact you can point to (the 12kW TM44 threshold, the 28-day EICR remedial
window, the Fire Safety Order). Otherwise write around it.

**Never name a competitor.** Koalr and the search data will hand you specific
firms. The argument never needs them and naming them invites a dispute worth
nothing.

**The audience is the firms, not their customers.** Every query you read is
typed by an end buyer — the landlord who needs a TM44, the duty holder facing a
Reg 4 obligation. ADVRT's readers are the firms that serve them. The data is
the subject, never the audience. Nothing should rank for `tm44 inspection near
me`; it should rank for `tm44 leads` and be what an air conditioning company's
owner finds when they look for growth.

**Do not cannibalise.** Before committing to a title, read
`src/content/insights/` and check no existing piece targets the same phrases.
Two articles chasing one query is the exact mistake this blog argues against.
If the best idea overlaps an existing post, improve that post instead and say
so in the report.

---

## 1. Read the data

Google Search Console through the Windsor.ai connector. The live property is
`sc-domain:advrt.co.uk` — the site moved onto that domain in November 2026, so
it is now the real performance source.

Call `get_fields` for `searchconsole` before `get_data` if you are unsure of a
field id. The ones you need are `query`, `pagepath`, `clicks`, `impressions`,
`position`, `date`.

Pull these four, each with `connector: "searchconsole"` and
`accounts: ["sc-domain:advrt.co.uk"]`:

1. **This week.** `date_preset: "last_7d"`, fields `query, pagepath, clicks,
   impressions, position`, filter `[["impressions","gte",3]]`.
2. **The week before.** `date_from`/`date_to` set to the seven days before
   that, same fields and filter. You need it to compute movement.
3. **Pages only, this week.** fields `pagepath, clicks, impressions, position`.
4. **Sibling demand.** `comsurv.uk` and `sc-domain:greenwashrooms.co.uk`,
   `date_preset: "last_30d"`, fields `query, impressions, position`. These are
   ADVRT's own trade brands and they show what buyers in these disciplines
   actually ask. **Never `gogreenquote.com`.**

If a pull returns `status: "pending"`, call it again with identical arguments
until it returns rows.

**If the main property returns almost nothing**, say so plainly in the report
and fall back to pillar gaps (step 2d) plus sibling demand. Do not manufacture
movement from noise. A week with nothing worth saying is a week to publish one
piece, or none.

---

## 2. Decide what to write

Four questions, in this order. Each can produce a candidate.

**a. Movers.** Which queries gained or lost the most position week on week?
A query that moved from 30 to 15 is one good piece away from page one. A query
that dropped out of the top 20 may have a page that needs strengthening rather
than a new post.

**b. Newly ranking.** Which queries or pages appeared this week that were absent
last week? New pages finding their first impressions tell you which pillar
Google is starting to associate with the site — that is the pillar to feed.

**c. Striking distance.** Queries at positions 11–25 with real impressions and
few or no clicks. These are the cheapest wins on the board: one focused piece,
or a strengthening pass on the page already ranking, moves them onto page one.
Prefer these over anything else when they exist.

**d. Pillar gaps.** The seven sectors in `src/data/sectors.ts` are the pillars:
surveyors, architects, contractors, compliance, fire protection, training,
wider built environment. Which has the thinnest support in
`src/content/insights/`? Fire protection and specialist contractors are the
commercial priorities — fire protection firms are the single most valuable
audience ADVRT has.

Everything should link back to the spine piece,
`/insights/ranking-without-traffic`, which argues the whole method.

**Pick two or three.** Three when the data is clear and the ideas are strong.
Two when it is thin. One when it is very thin. Never four — volume is not the
goal, and a weak piece costs more than a missing one.

---

## 3. Write

House style, learned from the twenty-two pieces already in
`src/content/insights/`. Read two of them before you start if you have not
recently.

- **British English.** Optimise, not optimize. Programme, not program.
- **Plain and direct.** Short sentences. No throat-clearing, no "in today's
  fast-paced digital landscape", no exclamation marks, no emoji.
- **Say the useful thing first.** The reader is a busy contractor, not a
  marketer, and they will leave.
- **Specific over general.** Thresholds, intervals, codes, consequences, cost
  ranges. Vague content ranks for nothing and gets cited by nothing.
- **Honest about size.** When a market is small, say so and explain why it is
  still worth having. That honesty is the brand.
- **1,100–1,800 words.** Headings phrased the way people ask the question.

Frontmatter — the schema is `src/content.config.ts`, and the build will fail
if you get it wrong:

```yaml
---
title: 'Sentence case, with a colon if it earns one'
metaTitle: 'Under 60 characters for the search result'
excerpt: 'One or two sentences. This is the meta description and the card copy.'
topic: 'Strategy'          # an existing topic, see the chips on /insights
crumb: 'Fire protection · Strategy'
date: 2026-11-16           # see step 6 — this is the publish gate
mins: 7
sectors:                   # slugs from src/data/sectors.ts, drives related links
  - 'fire-protection'
takeaways:
  - 'Four single-sentence takeaways. These render above the article.'
---
```

Use straight quotes and apostrophes in the body — markdown smartens them.
In frontmatter they do not get smartened, so type curly ones there by hand
(`'…beat "near me"'` must be `'…beat “near me”'`).

Do not set `featured: true`. The spine piece holds it.

---

## 4. Generate the covers

One per article, through AIBox. The box is already built and reusable:

- **box_id** `6af396e7660e759e00945279` — "Dark B2B Blog Cover – Square
  Editorial Render (1:1)". It carries the house art direction, so the row only
  supplies the subject.
- Call `aibox_run_box` with `rows`, one row per article:
  `{"concept": "<a concrete abstract subject>"}`. Poll `aibox_get_run` until
  `status: "completed"`. Roughly 8 credits a row, 90 seconds for a batch.
- If `aibox_prepare_rows` refuses the box as unpublished, pass
  `source: "draft"`. `aibox_run_box` does not need it.

Concepts that work: a matte grey geometric object with exactly one element in
orange. "A manifold of grey matte pipes meeting at right angles, with one
single orange valve wheel." "Three grey matte circuit-breaker blocks in a row,
the middle one orange." Keep it physical and singular. No text, no people, no
scenes.

Download each result and install it, named for the article's slug — the image
registry picks it up automatically from the filename:

```bash
node -e "require('sharp')('<downloaded>.png')
  .resize(1024,1024,{fit:'cover'})
  .jpeg({quality:86,mozjpeg:true})
  .toFile('src/assets/images/insight-<slug>.jpg')"
```

Put downloads in a fresh empty directory under the scratchpad, never in the
repository.

---

## 5. Interlink

Every new article links to **at least two existing articles** and **the sector
pages it is tagged against**, with descriptive anchor text — the phrase the
destination targets, not "click here" and not a bare sector name.

Link the spine piece, `/insights/ranking-without-traffic`, from every piece.

Then add a link **into** each new article from at least one existing article
where it genuinely belongs. A new post with no inbound links is an orphan and
will take months to rank. This is the step most easily forgotten.

Check every link resolves before committing:

```bash
node -e "
const fs=require('fs');
const slugs=new Set(fs.readdirSync('src/content/insights').map(f=>'/insights/'+f.replace(/\.md$/,'')));
const pages=new Set(['/surveyors','/architects','/contractors','/compliance','/fire-protection','/training','/built-environment','/lead-generation','/insights','/contact','/start-a-project']);
let bad=0;
for (const f of fs.readdirSync('src/content/insights')) {
  for (const m of fs.readFileSync('src/content/insights/'+f,'utf8').matchAll(/\]\((\/[^)]*)\)/g)) {
    if (!slugs.has(m[1]) && !pages.has(m[1])) { console.log('BROKEN', f, '->', m[1]); bad++; }
  }
}
console.log(bad ? bad+' broken' : 'all internal links resolve');
"
```

---

## 6. Date them across the week

`src/lib/posts.ts` hides any post dated in the future. So date the batch across
the week and it publishes a piece at a time rather than all at once:

- first piece — **today** (the Monday the run fires)
- second — **Wednesday**
- third — **Friday**

Because the site is static, a future-dated post only appears when a build runs
on or after its date. So after committing, schedule the rebuilds with
`create_trigger`, one `run_once_at` per future-dated piece, at about 07:10 UK
time on its day:

> name: `Publish <slug>`
> prompt: `Run: git -C /home/user/advrt-site commit --allow-empty -m "Rebuild: publish today's scheduled article" && git push origin main. This rebuilds advrt.co.uk so the article dated today goes live. Then confirm it returns 200 and report one line.`
> initiation: `own_followup`

Verify afterwards that each really did go live.

---

## 7. Verify, then ship

Never commit without all four passing:

```bash
npm run build          # must succeed; note the page count went up
```

- **Build succeeds** and the page count rose by the number of articles dated
  today (future-dated ones will not build yet — that is correct).
- **Internal links resolve** — the checker in step 5.
- **Covers render** — each new article has `src/assets/images/insight-<slug>.jpg`
  and the card on `/insights` shows it.
- **Schema validates** — `BlogPosting` and `BreadcrumbList` parse on each new
  page in `dist/insights/`.

Then ship, according to the mode below.

### Mode

**Current mode: REVIEW.** Push the batch to a branch and open a pull request
titled `Weekly content: <week commencing>`, with the plan and the reasoning in
the body. Do not merge it. Report the PR link.

Jack reviews four weeks of output, then changes the line above to
**Current mode: AUTOPILOT**, after which: commit straight to `main` and push.
That deploys to advrt.co.uk within about 30 seconds — the Netlify project
builds from GitHub pushes.

Either way, end-of-run checks: `https://advrt.co.uk/insights` lists the piece
dated today, and its URL returns 200.

---

## 8. Report

Short. In the PR body in review mode, in the session otherwise.

- What the data showed — movers, new entrants, striking distance, in words
  rather than figures.
- What you chose to write and why each one.
- What you decided **not** to write, and why. This matters as much.
- Anything that needs a human: a page that is slipping, a constraint you were
  unsure of, a pillar going hungry.

If you published nothing, say that clearly and why. It is a valid week.
