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

export const proof = [
  { to: 49, label: 'Enquiries in month one', sub: 'Huxley Surveyors' },
  { to: 10, prefix: '£', suffix: 'm+', label: 'Ad spend managed', sub: 'Built environment only' },
  { to: 6, label: 'Sectors served', sub: 'One discipline' },
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

export const sectorRows = [
  { no: '01', name: 'Surveyors', href: '/surveyors', desc: 'Instructions from homeowners, buyers and funders, filtered to the work you want.' },
  { no: '02', name: 'Contractors', href: '/contractors', desc: 'Tender-ready enquiries in the trades and regions you prioritise.' },
  { no: '03', name: 'Compliance', href: '/compliance', desc: 'EPCs, EICRs, gas, fire: people who need the certificate this week.' },
  { no: '04', name: 'Training', href: '/training', desc: 'Course dates filled by learners and employers ready to book.' },
  { no: '05', name: 'Architects', href: '/architects', desc: "Commissions that fit the portfolio you're building." },
  { no: '06', name: 'Everyone else', href: '/built-environment', desc: 'Engineers, planners, consultancies and specialist trades.' },
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
