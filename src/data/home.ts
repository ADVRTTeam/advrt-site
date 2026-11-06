/** Home page content, verbatim from the design canvas. */

export const tickerWords = [
  'surveyors.', 'architects.', 'contractors.', 'compliance.', 'trainers.', 'engineers.', 'planners.',
] as const;

export const marqueeWords = [
  'Surveyors', 'Architects', 'Contractors', 'Compliance', 'Training', 'Engineers', 'Planners',
] as const;

export const sectors = [
  {
    no: '01',
    name: 'Surveyors',
    desc: 'Instructions from homeowners, buyers and funders, filtered to the valuation, building-survey and monitoring work you actually want.',
    enquiries: 'Level 2 and Level 3 surveys, Help to Buy, independent and probate valuations, monitoring instructions.',
    chips: ['Google Search', 'Two-stage qualification', 'Lead-hub site', 'Call tracking'],
    href: '/surveyors',
    cta: 'Explore surveyors',
  },
  {
    no: '02',
    name: 'Contractors',
    desc: 'A steady pipeline of tender-ready enquiries and sub-contract relationships in the trades and regions you prioritise.',
    enquiries: 'Tender invitations, direct client enquiries, sub-contract packages by trade and region.',
    chips: ['Tender-ready funnels', 'Regional search', 'Qualification', 'Custom CRM'],
    href: '/contractors',
    cta: 'Explore contractors',
  },
  {
    no: '03',
    name: 'Compliance',
    desc: 'EPC assessors, electrical and gas safety inspectors, fire risk assessors and specialist surveyors: diaries filled with landlords, agents and businesses who need the certificate.',
    enquiries: 'EPCs, EICRs, gas safety certificates, fire risk assessments, asbestos and legionella surveys.',
    chips: ['Discipline pages', 'Local search', 'Instant quote forms', 'Repeat reminders'],
    href: '/compliance',
    cta: 'Explore compliance',
  },
  {
    no: '04',
    name: 'Training',
    desc: 'Training providers for the built environment: health and safety, retrofit, site cards and technical courses, with every date filled by learners and employers ready to book.',
    enquiries: 'Course bookings, employer group bookings, funded learner enquiries, refresher training.',
    chips: ['Course pages', 'Search and social', 'Booking forms', 'Date-led campaigns'],
    href: '/training',
    cta: 'Explore training',
  },
] as const;

export const process = [
  {
    no: '01',
    tag: 'Survey',
    name: 'Pre-spend audit',
    img: 'process-1-survey',
    alt: 'An orange laser line surveying an empty concrete plot',
    desc: 'We survey the ground first: tracking, attribution, lead questionnaires and compliance. Foundations before spend.',
    chips: ['Tracking', 'Compliance', 'Baselines'],
  },
  {
    no: '02',
    tag: 'Foundations',
    name: 'Lead hub and tracking',
    img: 'process-2-foundations',
    alt: 'A concrete foundation slab with one orange rebar cage',
    desc: 'A dedicated lead-hub site wired for conversion and full tracking: the base every campaign stands on.',
    chips: ['Lead-hub site', 'Tracking', 'Analytics'],
  },
  {
    no: '03',
    tag: 'Build',
    name: 'Proven campaigns',
    img: 'process-3-build',
    alt: 'An orange crane hook lowering a floor slab onto a tower',
    desc: 'Paid campaigns already proven on our own spend. High-intent enquiries from day one, not learning on your budget.',
    chips: ['Paid social', 'Search / PPC', 'Creative'],
  },
  {
    no: '04',
    tag: 'Fit-out',
    name: 'Qualification and CRM',
    img: 'process-4-fitout',
    alt: 'Grey cubes filtered through a gate, only orange cubes pass',
    desc: 'Every enquiry arrives job-ready. Leads are scored and filtered before they reach a CRM built around your pipeline.',
    chips: ['Qualification', 'Scoring', 'Custom CRM'],
  },
  {
    no: '05',
    tag: 'Handover',
    name: 'Walkthrough and handover',
    img: 'process-5-handover',
    alt: 'An orange key in front of a finished building',
    desc: 'Everything working, documented and walked through, then you get the keys. We stay on hand to support and scale.',
    chips: ['Full-confidence handover', 'You own it', 'Ongoing support'],
  },
] as const;

export const cases = [
  {
    sector: 'Surveyors',
    client: 'Huxley Surveyors · London and Brighton',
    title: 'A ground-up lead generation build, from scratch.',
    stat: '49',
    statLabel: 'Enquiries in the first month',
    img: 'case-huxley',
    alt: 'Huxley Chartered Surveyors homepage',
    chips: ['Lead-gen site build', 'Google Ads', 'Tracking'],
  },
  {
    sector: 'Surveyors',
    client: 'Foundation Surveyors · North London',
    title: 'Landing pages that sit on their existing website.',
    stat: '26',
    statLabel: 'Residential survey enquiries in the first month',
    img: 'case-foundation',
    alt: 'Foundation Chartered Surveyors Level 2 survey landing page',
    chips: ['Bespoke landing pages', 'Google Ads', 'Tracking', 'CRM integration'],
  },
  {
    sector: 'Surveyors',
    client: 'Nicholas & Co Surveyors · North London',
    title: 'A dedicated landing page package with targeted ads.',
    stat: '32',
    statLabel: 'Residential and commercial enquiries in the first month',
    img: 'case-nicholas',
    alt: 'Nicholas and Co Chartered Surveyors commercial survey landing page',
    chips: ['Landing page package', 'Targeted ads', 'Ongoing maintenance'],
  },
] as const;

export const edge = [
  {
    no: '01',
    tag: 'Experience',
    name: 'Decades in the built environment',
    desc: "Our media buyers have spent decades marketing specifically for surveyors, architects, contractors and compliance firms. We already speak your buyers' language.",
  },
  {
    no: '02',
    tag: 'Own-spend R&D',
    name: 'We test on our own budget',
    desc: 'We run our own lead-generation websites using our own money: a live lab where new strategies are proven before they ever touch a client account.',
  },
  {
    no: '03',
    tag: 'Speed to results',
    name: 'Plug into what already works',
    desc: 'You inherit strategies that are already running and optimised. No ramp-up on your spend, no learning curve billed to you.',
  },
] as const;

export const ownership = [
  {
    name: 'Full-confidence handover',
    desc: 'Nothing gets signed off until you know how to run it: the campaigns, the leads, fast replies, proper follow-up, which enquiries to chase.',
  },
  {
    name: 'You own everything',
    desc: 'The lead-hub site, the campaigns and every scrap of data sit in your accounts. Hand it to your team whenever you like.',
  },
  {
    name: 'Total transparency',
    desc: 'You see exactly where every pound of spend goes and which sources convert. No black boxes, ever.',
  },
  {
    name: 'Support on tap',
    desc: "No hostage contracts. We're on hand to optimise, scale and support for as long as it's useful to you.",
  },
] as const;

/** "Now booking Q<n> <year>" — next quarter, computed at build time. */
export function nextQuarter(now = new Date()): string {
  let q = Math.floor(now.getMonth() / 3) + 2;
  let year = now.getFullYear();
  if (q > 4) {
    q = 1;
    year += 1;
  }
  return `Q${q} ${year}`;
}
