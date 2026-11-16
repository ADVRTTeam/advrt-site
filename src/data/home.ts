/** Home page content, from the night-system home board. */

/**
 * The manifesto. Words prefixed with `*` light up in the accent colour as
 * the reader scrolls; the rest turn from off to on.
 */
export const manifesto =
  "The built environment runs on long cycles, high-value work and trust earned over decades. " +
  "Generic agencies treat a *£2m *development *enquiry like an e-commerce click. *We *never *will. " +
  "We've spent our careers inside this industry, and we prove every strategy with " +
  "*our *own *money before yours is ever involved.";

/** Split once at build time so the page ships plain spans. */
export const manifestoWords = manifesto.split(' ').map((raw) => {
  const accent = raw.startsWith('*');
  return { text: accent ? raw.slice(1) : raw, accent };
});

export const manifestoPlain = manifesto.replace(/\*/g, '');

export const sectorRows = [
  { no: '01', name: 'Surveyors', href: '/surveyors', desc: 'Instructions from homeowners, buyers and funders, filtered to the work you want.' },
  { no: '02', name: 'Contractors', href: '/contractors', desc: 'High-value work for damp proofing, asbestos, air conditioning and the specialist trades.' },
  { no: '03', name: 'Compliance', href: '/compliance', desc: 'EPCs, EICRs, gas, fire: people who need the certificate this week.' },
  { no: '04', name: 'Fire protection', href: '/fire-protection', desc: 'Risk assessments, extinguishers, alarms and passive protection — contracts, not callouts.' },
  { no: '05', name: 'Training', href: '/training', desc: 'Course dates filled by learners and employers ready to book.' },
  { no: '06', name: 'Architects', href: '/architects', desc: "Commissions that fit the portfolio you're building." },
  { no: '07', name: 'Wider built environment', href: '/built-environment', desc: 'Engineers, planners, consultancies and specialist trades.' },
] as const;

/**
 * Spelled out for the sectors heading, so adding a sector can't leave the
 * copy claiming the wrong number. Falls back to the digits past the range
 * the list will realistically ever reach.
 */
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve'] as const;

export const sectorCountWord =
  WORDS[sectorRows.length] ?? String(sectorRows.length);

/**
 * The proof row. `Sectors served` counts sectorRows rather than restating
 * its length, which is why that list is defined above this one — it went
 * stale once already when fire protection was added.
 */
export const proof = [
  { to: 49, label: 'Enquiries in month one', sub: 'From a standing start' },
  { to: 2, prefix: '£', suffix: 'm+', label: 'Ad spend managed', sub: 'Built environment only' },
  { to: sectorRows.length, label: 'Sectors served', sub: 'One discipline' },
  { to: 0, label: 'Enquiries shared', sub: 'with other firms. Ever.' },
] as const;

export const cases = [
  {
    img: 'case-huxley',
    alt: 'Huxley Chartered Surveyors homepage',
    client: 'Huxley Surveyors · London and Brighton',
    title: 'A ground-up build, from a standing start.',
    lede: 'New lead-gen site, campaigns proven on our own spend, and tracking to the penny.',
    stat: '49',
  },
  {
    img: 'case-nicholas',
    alt: 'Nicholas and Co Chartered Surveyors landing page',
    client: 'Nicholas & Co Surveyors · North London',
    title: 'A landing page package with targeted ads.',
    lede: 'Residential and commercial, with ongoing maintenance keeping it sharp.',
    stat: '32',
  },
  {
    img: 'case-foundation',
    alt: 'Foundation Chartered Surveyors landing page',
    client: 'Foundation Surveyors · North London',
    title: 'A bespoke build on their existing site.',
    lede: 'Custom landing pages engineered into their current site, with ads, tracking and CRM integration built around it.',
    stat: '26',
  },
] as const;


/**
 * The diagnosis: how work actually gets bought in this industry, and what
 * each route costs you. Every line is an argument the site already makes
 * somewhere — the comparison-sites article, the sector ledes, the
 * manifesto — gathered into one place where a visitor meets it first.
 *
 * Deliberately fair to each route. Referrals really are the best work, and
 * doing it yourself really can work. A comparison that only flatters the
 * seller reads as a sales pitch and gets discounted as one.
 */
export const diagnosis = [
  {
    no: '01',
    name: 'Shared leads',
    how: 'Comparison sites and lead sellers',
    cost: 'The same enquiry goes to four firms. You compete on who calls back first and who drops their price, and the margin goes with it.',
  },
  {
    no: '02',
    name: 'Directories',
    how: 'Paid listings and trade portals',
    cost: 'You rent a position rather than own one. Stop paying and every bit of it disappears the same afternoon.',
  },
  {
    no: '03',
    name: 'Referrals',
    how: 'Word of mouth and repeat clients',
    cost: 'The best work you will ever get, and the one tap you cannot turn up. When the diary is thin in February, nothing about it is in your hands.',
  },
  {
    no: '04',
    name: 'A generalist agency',
    how: 'Retainer, monthly report, quarterly call',
    cost: 'They learn your trade on your budget, and the account sits with whoever is free that month. You pay for the learning curve twice.',
  },
  {
    no: '05',
    name: 'Doing it yourself',
    how: 'Your own Google Ads account',
    cost: 'Honest, and it can work. It also competes for attention with running the firm, and the learning is paid for in spend that bought nothing.',
  },
] as const;

export const process = [
  {
    no: '01', img: 'process-1-survey', alt: 'Pre-spend audit', name: 'Pre-spend audit',
    desc: 'Tracking, attribution, lead questionnaires and compliance. We survey the ground before a pound is spent.',
  },
  {
    no: '02', img: 'process-2-foundations', alt: 'Lead hub', name: 'Lead hub and tracking',
    desc: 'A dedicated lead-hub site wired for conversion, with attribution that traces every instruction to the click that started it.',
  },
  {
    no: '03', img: 'process-3-build', alt: 'Campaigns', name: 'Proven campaigns',
    desc: 'Paid campaigns already proven on our own lead generation brands. High-intent enquiries from day one, not learning on your budget.',
  },
  {
    no: '04', img: 'process-4-fitout', alt: 'Qualification', name: 'Qualification and CRM',
    desc: 'Two-stage forms that qualify, score and filter, so every enquiry arrives job-ready in a pipeline built around yours.',
  },
  {
    no: '05', img: 'process-5-handover', alt: 'Handover', name: 'Full-confidence handover',
    desc: 'Everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale.',
  },
] as const;

/**
 * Row 03's heading is "Ex-RICS media buyers" on the board. Jack asked for
 * that claim to come off the public site, so it reads as the team's
 * specialism instead. Recorded in SCOPE-night-system.md.
 */
export const fit = [
  {
    no: '01',
    name: 'One industry, not one of many',
    desc: "Every account we run is in property, construction or compliance. We already speak your buyers' language, and your competitors' weaknesses are our day job.",
  },
  {
    no: '02',
    name: 'We prove it in the field first',
    desc: 'We run our own lead generation brands as a live lab. Strategies are proven on our spend before they ever touch a client account.',
  },
  {
    no: '03',
    name: 'An industry-specialist team',
    desc: "Campaigns are run by people who've spent careers inside the built environment, not a grad rotated off a shoe brand on Monday.",
  },
] as const;
