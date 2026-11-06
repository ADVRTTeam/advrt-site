/**
 * Sector page content, verbatim from the design canvas.
 *
 * The canvas has two generations of this template: Surveyors (bespoke, with the
 * shared-leads odds calculator and the FindMySurveyor lab) and the later five,
 * which are driven by a SECTOR config object with a pipeline calculator and a
 * generic "own brands" lab. Both shapes are represented here and the shared
 * layout branches on `calc.kind` and `lab.kind`.
 */

export interface Tab {
  no: string;
  name: string;
  tag: string;
  head: string;
  body: string;
  points: string[];
}

export interface Faq {
  q: string;
  a: string;
  /** Renders the "Start an enquiry" button inside the answer. */
  link?: boolean;
}

export interface Discipline {
  name: string;
  who: string;
  trigger: string;
  play: string;
}

export type Calc =
  | {
      kind: 'shared';
      /** Surveyors: comparison sites sell one enquiry to N firms. */
      firms: number;
      cpl: number;
    }
  | {
      kind: 'pipeline';
      jobsLabel: string;
      jobsMin: number;
      jobsMax: number;
      jobs: number;
      winLabel: string;
      win: number;
      valLabel: string;
      valMin: number;
      valMax: number;
      valStep: number;
      val: number;
      needLabel: string;
      yearLabel: string;
    };

export type Lab =
  | { kind: 'named'; head: string; lede: string; stats: { n: string; label: string }[] }
  | { kind: 'brands'; lede: string };

export interface Sector {
  slug: string;
  /** Nav sublabel, e.g. "Surveyors". */
  short: string;
  /** Breadcrumb chip, e.g. "01 Surveyors". */
  crumb: string;
  title: string;
  /** Used for schema and as a fallback. */
  description: string;
  /** <title> for search results. Kept under 60 characters with the brand. */
  metaTitle: string;
  /** Meta description, written for the click. Kept under 158 characters. */
  metaDescription: string;
  h1a: string;
  h1b: string;
  lede: string;
  /** Primary hero CTA label. */
  heroCta: string;
  marq: string[];
  disciplines?: { tag: string; head: string; lede: string; items: Discipline[] };
  problemA: string;
  problemB: string;
  problemLede: string;
  calc: Calc;
  buildHead: string;
  buildLede1: string;
  buildLede2: string;
  tabs: Tab[];
  lab: Lab;
  steps: { no: string; name: string; desc: string }[];
  stepsHeadA: string;
  stepsHeadB: string;
  caseStudy: {
    img: string;
    alt: string;
    client: string;
    statA: string;
    statRest: string;
    lede: string;
    stats: { n: string; label: string }[];
  };
  faqHead: string;
  faqs: Faq[];
  ctaTag: string;
  ctaHead: string;
  ctaBody: string;
  ctaBtn: string;
}

/* ---- Shared pieces ------------------------------------------------ */

/** The three closing FAQs every sector page carries. */
const COMMON_FAQS: Faq[] = [
  {
    q: 'Where do the leads go?',
    a: "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies.",
  },
  {
    q: 'Can my own team run it?',
    a: "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too.",
  },
  {
    q: 'What does it cost?',
    a: 'Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we’ll come back with a plan and a number.',
    link: true,
  },
];

const STEP_NAMES = ['Audit', 'Lead hub', 'Campaigns', 'Qualify', 'Hand over'];

const HANDOVER_STEP =
  'A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us.';

/** Tab 03 and 05 are identical across the five later sector pages. */
const TAB_TRACKING = {
  no: '03',
  name: 'Tracking',
  tag: 'ADVRTISE / 03',
  head: 'Rock-solid tracking and attribution.',
  body: 'Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real enquiries, not clicks.',
  points: [
    'Conversion tracking from click to enquiry',
    'Source-level reporting on what actually converts',
    'Clean data behind every optimisation decision',
  ],
};

const TAB_HANDOVER = {
  no: '05',
  name: 'Full-confidence handover',
  tag: 'ADVRTISE / 05',
  head: 'You get the keys, with full confidence.',
  body: 'Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.',
  points: [
    'A proper walkthrough on your own accounts',
    'Lead handling: response speed, follow-up, which enquiries to chase',
    'You own the site, the campaigns and the data',
    'We stay on hand to support and scale',
  ],
};

function steps(descs: string[]) {
  return STEP_NAMES.map((name, i) => ({
    no: `0${i + 1}`,
    name,
    desc: descs[i] ?? HANDOVER_STEP,
  }));
}

const LAB_BRANDS_CARDS = [
  { n: 'Own brands', p: 'We run our own lead generation businesses, not just client accounts.' },
  { n: 'Own money', p: 'New strategies get proven on our spend before they touch yours.' },
  { n: 'Live data', p: "Keywords, creative and forms start from what's converting right now." },
];

export { COMMON_FAQS, LAB_BRANDS_CARDS, HANDOVER_STEP };

/* ---- Sectors ------------------------------------------------------ */

export const sectors: Sector[] = [
  /* ============================== SURVEYORS ============================== */
  {
    slug: 'surveyors',
    short: 'Surveyors',
    crumb: '01 Surveyors',
    title: 'ADVRT · Marketing for surveyors',
    description:
      'Paid search and lead generation for RICS surveyors. Level 2 and 3 surveys, Help to Buy and independent valuations, delivered to you alone and qualified before they reach your inbox.',
    metaTitle: 'Marketing for surveyors | ADVRT',
    metaDescription:
      'Exclusive survey and valuation enquiries for RICS firms, never shared with four rivals. Paid search built on live surveyor data. A plan, not a pitch.',
    h1a: 'Instructions you want.',
    h1b: 'Not leads you share.',
    lede: 'Paid search and lead generation for RICS surveyors. Level 2 and 3 surveys, Help to Buy and independent valuations, delivered to you alone and qualified before they reach your inbox.',
    heroCta: 'Brief us',
    marq: [
      'Level 2 surveys', 'Level 3 surveys', 'Help to Buy',
      'Probate valuations', 'CGT valuations', 'Lease extensions',
    ],
    problemA: 'Comparison sites sell one enquiry to',
    problemB: 'five firms.',
    problemLede:
      "You're fishing in someone else's pond. Move the sliders and see what that does to your odds.",
    calc: { kind: 'shared', firms: 5, cpl: 20 },
    buildHead: 'ADVRTISE.',
    buildLede1:
      'Our proprietary lead generation framework. A website no one can reach is an island. ADVRTISE builds the bridge.',
    buildLede2:
      'Five parts, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.',
    tabs: [
      {
        no: '01', name: 'Landing pages', tag: 'ADVRTISE / 01',
        head: 'Fast pages built to turn searches into instructions.',
        body: "A custom static site, or focused subdomain landing pages if you'd rather keep the site you have. Every page is written for one type of instruction, so Google sees relevance and visitors see exactly what they came for.",
        points: [
          'Built for speed: every second of load time costs conversions',
          'One page per instruction type for stronger Quality Scores',
          'Your branding, your domain, your property',
        ],
      },
      {
        no: '02', name: 'Targeted ads', tag: 'ADVRTISE / 02',
        head: 'Search campaigns built on live surveyor data.',
        body: "Google Ads is the core lead pillar. Keywords, match types and bids come from what's already converting on our own surveyor campaigns, so day one isn't a guessing game.",
        points: [
          'Search themes for L2, L3, Help to Buy and independent valuations',
          'Lower-competition terms where the margins are better',
          'Sits alongside your organic rankings, not instead of them',
        ],
      },
      {
        no: '03', name: 'Tracking', tag: 'ADVRTISE / 03',
        head: 'Rock-solid tracking and attribution.',
        body: 'Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real conversions, not clicks.',
        points: [
          'Conversion tracking from click to enquiry',
          'Source-level reporting on what actually converts',
          'Clean data that makes every optimisation decision easier',
        ],
      },
      {
        no: '04', name: 'Quotation forms', tag: 'ADVRTISE / 04',
        head: 'Optimised forms. Job-ready enquiries.',
        body: 'A short first step captures the lead. A second step gathers property type, value, location and timescale, so you can price and call back without the back-and-forth.',
        points: [
          "Two-stage qualification that filters out work you don't want",
          'Captures everything you need to quote',
          'Tuned on our own sites for completion rate',
        ],
      },
      TAB_HANDOVER,
    ],
    lab: {
      kind: 'named',
      head: 'We run FindMySurveyor with our own money.',
      lede: 'Keywords, ad copy, bids and qualification questions all come from live surveyor data. So your campaigns start where it already works.',
      stats: [
        { n: '~10', label: 'Enquiries a day' },
        { n: '10%', label: 'Site conversion' },
        { n: '30–40%', label: 'Lead to client' },
      ],
    },
    steps: steps([
      'We look at what you have now: tracking, current lead sources, the instructions you want more of and the areas you cover.',
      'We build the site or landing pages and wire up tracking, so every enquiry traces back to the search that caused it.',
      'Search campaigns go live using structures already proven on FindMySurveyor, tuned to your patch and your service list.',
      'The two-stage form scores and filters enquiries before they reach you. You call back the work you want, with what you need to quote.',
    ]),
    stepsHeadA: 'Five stages.',
    stepsHeadB: 'Then the keys are yours.',
    caseStudy: {
      img: 'case-huxley',
      alt: 'Huxley Chartered Surveyors homepage',
      client: 'Huxley Surveyors · London and Brighton',
      statA: '49 enquiries',
      statRest: 'in month one.',
      lede: 'A ground-up build from a standing start: new lead-gen site, campaigns already proven on our own spend, and full tracking for a firm working two cities.',
      stats: [
        { n: '49', label: 'Enquiries in the first month' },
        { n: '0', label: 'Enquiries shared with other firms' },
      ],
    },
    faqHead: 'What surveyors ask first.',
    faqs: [
      {
        q: 'I already rank organically. Why pay for ads?',
        a: 'Keep it. Paid search is incremental to organic, not a replacement. It covers the instruction types and areas you don’t rank for, and the relevance signals it builds help organic and AI search too.',
      },
      {
        q: 'Do I need a new website?',
        a: 'Not necessarily. If you like your site, we can build five subdomain landing pages and point the campaigns there. The aim is to make your marketing work harder, not to replace what you like.',
      },
      {
        q: "I've tried Google Ads and it didn't work.",
        a: "Most failed accounts never get past the learning phase on a small budget. We start from structures already converting on our own surveyor sites, so you're not paying to learn.",
      },
      ...COMMON_FAQS,
    ],
    ctaTag: 'Break ground',
    ctaHead: 'Stop sharing leads.',
    ctaBody: "Tell us which instructions you want more of. We'll come back with a plan, not a pitch.",
    ctaBtn: 'Brief us on your firm',
  },

  /* ============================== ARCHITECTS ============================= */
  {
    slug: 'architects',
    short: 'Architects',
    crumb: '02 Architects',
    title: 'ADVRT · Marketing for architects',
    description:
      'Paid search, social and lead generation for architecture practices. Private residential, extensions, new-builds and commercial work, qualified on budget, scope and timeline before they reach you.',
    metaTitle: 'Marketing for architects | ADVRT',
    metaDescription:
      'Paid search and social that brings architecture practices the right commissions, qualified on budget, scope and planning status before they reach you.',
    h1a: 'The right projects.',
    h1b: 'Not just more enquiries.',
    lede: 'Paid search, social and lead generation for architecture practices. Private residential, extensions, new-builds and commercial work, qualified on budget, scope and timeline before they reach you.',
    heroCta: 'Start a project',
    marq: ['Extensions', 'New-builds', 'Loft conversions', 'Refurbishments', 'Commercial', 'Planning-led projects'],
    problemA: 'Most practices run on referrals.',
    problemB: "Until they don't.",
    problemLede:
      'Referrals are brilliant until a quiet quarter. Work out how many enquiries it actually takes to keep the studio busy.',
    calc: {
      kind: 'pipeline',
      jobsLabel: 'Commissions you want a month', jobsMin: 1, jobsMax: 10, jobs: 2,
      winLabel: 'Your win rate on enquiries', win: 20,
      valLabel: 'Average fee', valMin: 2000, valMax: 100000, valStep: 1000, val: 15000,
      needLabel: 'Qualified enquiries you need a month',
      yearLabel: 'Added fee income a year',
    },
    buildHead: 'ADVRTISE.',
    buildLede1:
      'Our proprietary lead generation framework. A website no one can reach is an island. ADVRTISE builds the bridge.',
    buildLede2:
      'Five parts, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.',
    tabs: [
      {
        no: '01', name: 'Landing pages', tag: 'ADVRTISE / 01',
        head: 'Pages built to turn searches into enquiries.',
        body: 'Project-type pages that put the right portfolio in front of the right client: extensions for homeowners, commercial work for businesses and landlords.',
        points: [
          'One page per project type, with the work to match',
          'Fast on mobile, where most homeowners first look',
          'Your branding, your domain, your property',
        ],
      },
      {
        no: '02', name: 'Targeted ads', tag: 'ADVRTISE / 02',
        head: 'Campaigns aimed at the work you want.',
        body: "Google Search to catch high-intent briefs, plus Meta and Instagram to show the work to homeowners who are planning a project but haven't started searching yet.",
        points: [
          'Search themes by project type and area',
          'Visual social campaigns led by your best work',
          'Budgets weighted towards the projects you want most',
        ],
      },
      TAB_TRACKING,
      {
        no: '04', name: 'Quotation forms', tag: 'ADVRTISE / 04',
        head: 'Optimised forms. Job-ready enquiries.',
        body: 'A brief form that captures project type, budget, site, planning status and timeline, so you only take the calls worth taking.',
        points: [
          'Budget and scope asked up front',
          'Filters out work below your minimum fee',
          'Everything you need for a first conversation',
        ],
      },
      TAB_HANDOVER,
    ],
    lab: {
      kind: 'brands',
      lede: 'We run our own lead generation brands with our own money. What works there gets rebuilt around how homeowners and businesses choose a practice, so you skip the learning phase other agencies bill you for.',
    },
    steps: steps([
      'We look at your portfolio, the projects you want more of, your minimum fee and where your work comes from today.',
      'We build project-type pages around your best work and wire up tracking, so every brief traces back to its source.',
      'Search and social campaigns go live using structures already proven on our own lead-gen brands, tuned to your practice.',
      'The brief form filters on budget, scope and planning status. You call back the projects worth a meeting.',
    ]),
    stepsHeadA: 'Five stages.',
    stepsHeadB: 'Then the keys are yours.',
    caseStudy: {
      img: 'case-nicholas',
      alt: 'Nicholas and Co Chartered Surveyors commercial survey landing page',
      client: 'Nicholas & Co Surveyors · North London',
      statA: '32 enquiries',
      statRest: 'in month one.',
      lede: 'A dedicated landing page package with targeted ads and ongoing maintenance, built for a surveying firm. The same system wins briefs for architects.',
      stats: [
        { n: '32', label: 'Residential and commercial enquiries, month one' },
        { n: '0', label: 'Enquiries shared with other firms' },
      ],
    },
    faqHead: 'What practices ask first.',
    faqs: [
      {
        q: 'Will paid ads cheapen our brand?',
        a: "Not if they're done properly. We lead with the work, target the projects you want and keep the tone in line with your practice.",
      },
      {
        q: 'We mostly win through referrals. Why change?',
        a: "Keep them. Paid lead generation adds a pipeline you control, so a quiet referral month doesn't mean a quiet studio.",
      },
      {
        q: 'Can you filter out small jobs?',
        a: "Yes. The brief form asks budget and scope up front, and we exclude searches and audiences that don't fit your minimum fee.",
      },
      ...COMMON_FAQS,
    ],
    ctaTag: 'Break ground',
    ctaHead: 'Fill the studio diary.',
    ctaBody: "Tell us which projects you want more of. We'll come back with a plan, not a pitch.",
    ctaBtn: 'Start a project',
  },

  /* ============================= CONTRACTORS ============================= */
  {
    slug: 'contractors',
    short: 'Contractors',
    crumb: '04 Contractors',
    title: 'ADVRT · Marketing for contractors',
    description:
      'Lead generation for contractors and specialist trades. Direct client enquiries, tender opportunities and sub-contract packages in the trades and regions you prioritise.',
    metaTitle: 'Marketing for contractors | ADVRT',
    metaDescription:
      'Direct client enquiries and tender-ready leads for contractors and specialist trades, filtered by trade, budget, start date and postcode.',
    h1a: 'Work you choose.',
    h1b: 'Not jobs you chase.',
    lede: 'Lead generation for contractors and specialist trades. Direct client enquiries, tender opportunities and sub-contract packages in the trades and regions you prioritise.',
    heroCta: 'Start a project',
    marq: ['Groundworks', 'Fit-out', 'Refurbishment', 'M&E', 'Roofing', 'Maintenance contracts'],
    problemA: 'Feast or famine',
    problemB: "isn't a business plan.",
    problemLede:
      'Work out how many enquiries it takes to keep the order book full, at the win rate you actually see on quotes.',
    calc: {
      kind: 'pipeline',
      jobsLabel: 'Jobs you want to win a month', jobsMin: 1, jobsMax: 20, jobs: 3,
      winLabel: 'Your win rate on quotes', win: 25,
      valLabel: 'Average job value', valMin: 2000, valMax: 250000, valStep: 1000, val: 25000,
      needLabel: 'Qualified enquiries you need a month',
      yearLabel: 'Added turnover a year',
    },
    buildHead: 'ADVRTISE.',
    buildLede1:
      'Our proprietary lead generation framework. A website no one can reach is an island. ADVRTISE builds the bridge.',
    buildLede2:
      'Five parts, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.',
    tabs: [
      {
        no: '01', name: 'Landing pages', tag: 'ADVRTISE / 01',
        head: 'Pages built to turn searches into enquiries.',
        body: 'Pages by trade and region, so a fit-out client in Bristol sees fit-out work in Bristol, with the accreditations and case studies that win the quote.',
        points: [
          'One page per trade and service area',
          'Accreditations and past projects front and centre',
          'Your branding, your domain, your property',
        ],
      },
      {
        no: '02', name: 'Targeted ads', tag: 'ADVRTISE / 02',
        head: 'Campaigns aimed at the work you want.',
        body: "Google Search for direct client enquiries by trade and postcode, with radius targeting matched to how far you'll actually travel.",
        points: [
          'Search themes by trade, job type and area',
          'Radius and postcode targeting',
          'Spend dialled up or down with your capacity',
        ],
      },
      TAB_TRACKING,
      {
        no: '04', name: 'Quotation forms', tag: 'ADVRTISE / 04',
        head: 'Optimised forms. Job-ready enquiries.',
        body: 'Quote forms that capture scope, site location, budget and start date, so you price the right jobs first and skip the ones that were never going to happen.',
        points: [
          'Scope, budget and start date asked up front',
          'Out-of-area jobs filtered out',
          'Everything you need to book a site visit',
        ],
      },
      TAB_HANDOVER,
    ],
    lab: {
      kind: 'brands',
      lede: 'We run our own lead generation brands with our own money, including trade-led home improvement verticals. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.',
    },
    steps: steps([
      'We look at your trades, the jobs and margins you want more of, your patch and where work comes from today.',
      'We build trade and area pages and wire up tracking, so every enquiry traces back to the search that caused it.',
      'Search campaigns go live using structures already proven on our own lead-gen brands, tuned to your trades and patch.',
      'Quote forms filter on scope, budget, location and start date. You call back the jobs worth pricing.',
    ]),
    stepsHeadA: 'Five stages.',
    stepsHeadB: 'Then the keys are yours.',
    caseStudy: {
      img: 'case-foundation',
      alt: 'Foundation Chartered Surveyors Level 2 survey landing page',
      client: 'Foundation Surveyors · North London',
      statA: '26 enquiries',
      statRest: 'in month one.',
      lede: 'Bespoke landing pages on the website they already had, with ads, tracking and CRM integration. The same bolt-on build works for contractors.',
      stats: [
        { n: '26', label: 'Residential survey enquiries, month one' },
        { n: '0', label: 'Enquiries shared with other firms' },
      ],
    },
    faqHead: 'What contractors ask first.',
    faqs: [
      {
        q: 'We win most work through tenders. Does this help?',
        a: 'Yes. It runs alongside tenders and builds a pipeline of direct client work, which usually carries better margins.',
      },
      {
        q: 'Can you target just our area?',
        a: "Yes. Campaigns are radius and postcode targeted to where you'll actually work.",
      },
      {
        q: "We're flat out at the moment.",
        a: "Good. That's the best time to build the pipeline for when current jobs finish. Spend can be throttled up or down with your capacity.",
      },
      ...COMMON_FAQS,
    ],
    ctaTag: 'Break ground',
    ctaHead: 'Fill the order book.',
    ctaBody: "Tell us which jobs you want more of and where. We'll come back with a plan, not a pitch.",
    ctaBtn: 'Start a project',
  },

  /* ============================== COMPLIANCE ============================= */
  {
    slug: 'compliance',
    short: 'Compliance',
    crumb: '05 Compliance',
    title: 'ADVRT · Marketing for compliance and inspection firms',
    description:
      'Lead generation for compliance and inspection businesses. EPCs, EICRs, gas safety checks, fire risk assessments and more, from landlords, agents and businesses who need the certificate by a date.',
    metaTitle: 'Marketing for compliance firms | ADVRT',
    metaDescription:
      'Fill the diary with EPC, EICR, gas safety and fire risk assessment bookings. Local paid search built for buyers who need the certificate this week.',
    h1a: 'Inspections booked.',
    h1b: 'Not quotes chased.',
    lede: 'Lead generation for compliance and inspection businesses. EPCs, EICRs, gas safety checks, fire risk assessments and more, from landlords, agents and businesses who need the certificate by a date.',
    heroCta: 'Start a project',
    marq: ['EPCs', 'EICRs', 'Gas safety', 'Fire risk assessments', 'Asbestos surveys', 'Legionella', 'PAT testing'],
    disciplines: {
      tag: 'Disciplines',
      head: 'Every certificate. One system.',
      lede: 'Each discipline has its own buyers, triggers and margins. Pick yours to see how we play it.',
      items: [
        {
          name: 'EPCs',
          who: 'Landlords, letting agents, sellers and commercial owners.',
          trigger: 'Selling, letting, MEES minimum standards and funding schemes.',
          play: 'Volume at speed. Local search, instant prices and online booking, so the job is in the diary before a competitor calls back.',
        },
        {
          name: 'EICRs',
          who: 'Landlords, letting agents and homeowners.',
          trigger: 'Five-yearly rental inspections, sales and remedial work.',
          play: 'Recurring local demand. Area pages, landlord and agent journeys, and a clear route into remedial quotes.',
        },
        {
          name: 'Gas safety',
          who: 'Landlords, agents and homeowners.',
          trigger: 'Annual landlord gas safety certificates and boiler servicing.',
          play: 'Repeat business. Search for urgent renewals plus reminder campaigns that bring the same landlords back every year.',
        },
        {
          name: 'Fire risk assessments',
          who: 'Responsible persons for HMOs, blocks, offices and businesses.',
          trigger: 'Fire Safety Order duties, building changes and insurer requests.',
          play: 'Higher-value B2B work. Forms qualify by premises type, size and occupancy, so you quote accurately first time.',
        },
        {
          name: 'Asbestos and legionella',
          who: 'Commercial landlords, schools, FM firms and contractors.',
          trigger: 'Refurbishment, duty to manage and water hygiene obligations.',
          play: 'Specialist long-tail searches. Pages by survey type and sector, built for buyers who know exactly what they need.',
        },
      ],
    },
    problemA: 'Certificates are a race.',
    problemB: 'Speed wins the booking.',
    problemLede:
      'Compliance buyers want it booked, not discussed. Work out the enquiry volume you need to fill the diary.',
    calc: {
      kind: 'pipeline',
      jobsLabel: 'Inspections you want to book a month', jobsMin: 5, jobsMax: 200, jobs: 40,
      winLabel: 'Enquiry to booking rate', win: 40,
      valLabel: 'Average job value', valMin: 50, valMax: 2000, valStep: 10, val: 120,
      needLabel: 'Enquiries you need a month',
      yearLabel: 'Added revenue a year',
    },
    buildHead: 'ADVRTISE.',
    buildLede1:
      'Our proprietary lead generation framework. A website no one can reach is an island. ADVRTISE builds the bridge.',
    buildLede2:
      'Five parts, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.',
    tabs: [
      {
        no: '01', name: 'Landing pages', tag: 'ADVRTISE / 01',
        head: 'Pages built to turn searches into enquiries.',
        body: 'One page per discipline and area, with prices, turnaround times and booking front and centre. EPCs in Leeds and EICRs in Leeds each get the page they deserve.',
        points: [
          'One page per discipline and service area',
          'Prices and turnaround times up front',
          'Your branding, your domain, your property',
        ],
      },
      {
        no: '02', name: 'Targeted ads', tag: 'ADVRTISE / 02',
        head: 'Campaigns aimed at the work you want.',
        body: 'Google Search for high-intent certificate searches by discipline and postcode, plus reminder campaigns for repeat inspections like annual gas safety.',
        points: [
          'Search themes by discipline and postcode',
          'Separate journeys for landlords, agents and businesses',
          'Repeat-inspection reminder campaigns',
        ],
      },
      TAB_TRACKING,
      {
        no: '04', name: 'Quotation forms', tag: 'ADVRTISE / 04',
        head: 'Optimised forms. Job-ready enquiries.',
        body: 'Short forms that capture property type, size, location and deadline, so you can quote instantly or book straight into the diary.',
        points: [
          'Property type and deadline asked up front',
          'Instant-quote options for fixed-price work',
          'Hot bookings flagged for a same-day call',
        ],
      },
      TAB_HANDOVER,
    ],
    lab: {
      kind: 'brands',
      lede: 'We run our own lead generation brands in property and compliance with our own money, including EPCs. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.',
    },
    steps: steps([
      'We look at your disciplines, margins, coverage area and where bookings come from today.',
      'We build discipline and area pages and wire up tracking, so every booking traces back to its source.',
      'Campaigns go live using structures already proven on our own lead-gen brands, tuned to your disciplines and patch.',
      'Forms capture property type, size and deadline. You quote fast and book the jobs worth taking.',
    ]),
    stepsHeadA: 'Five stages.',
    stepsHeadB: 'Then the keys are yours.',
    caseStudy: {
      img: 'case-huxley',
      alt: 'Huxley Chartered Surveyors homepage',
      client: 'Huxley Surveyors · London and Brighton',
      statA: '49 enquiries',
      statRest: 'in month one.',
      lede: 'A ground-up build from a standing start: new lead-gen site, campaigns already proven on our own spend, and full tracking for a firm working two cities.',
      stats: [
        { n: '49', label: 'Enquiries in the first month' },
        { n: '0', label: 'Enquiries shared with other firms' },
      ],
    },
    faqHead: 'What inspectors ask first.',
    faqs: [
      {
        q: 'We cover several disciplines. One campaign or several?',
        a: 'One system, structured by discipline. Each gets its own pages and campaigns, so you can push the work with the best margins and dial back the rest.',
      },
      {
        q: 'Can you win landlord and agent accounts, not just one-offs?',
        a: 'Yes. We run separate journeys for portfolio landlords and letting agents, where one relationship means repeat work.',
      },
      {
        q: 'Price-shopping is brutal in our sector.',
        a: "That's why speed matters. Clear prices, instant quotes and fast call-backs give you the best shot at the booking, not just the cheapest number.",
      },
      ...COMMON_FAQS,
    ],
    ctaTag: 'Break ground',
    ctaHead: 'Fill the diary.',
    ctaBody: "Tell us which disciplines you want more of and where. We'll come back with a plan, not a pitch.",
    ctaBtn: 'Start a project',
  },

  /* =============================== TRAINING ============================== */
  {
    slug: 'training',
    short: 'Training',
    crumb: '06 Training',
    title: 'ADVRT · Marketing for built environment training providers',
    description:
      'Lead generation for training providers serving the built environment. Health and safety, retrofit, site cards, technical and compliance courses, filled with learners and employers who are ready to book.',
    metaTitle: 'Marketing for training providers | ADVRT',
    metaDescription:
      'Fill every course date. Paid search and social for built-environment training providers, with separate journeys for employers and individual learners.',
    h1a: 'Full courses.',
    h1b: 'Not empty seats.',
    lede: 'Lead generation for training providers serving the built environment. Health and safety, retrofit, site cards, technical and compliance courses, filled with learners and employers who are ready to book.',
    heroCta: 'Start a project',
    marq: ['Health and safety', 'Retrofit', 'CSCS', 'NEBOSH', 'SMSTS', 'CPCS', '18th Edition', 'First aid'],
    disciplines: {
      tag: 'Course areas',
      head: 'Every course. One system.',
      lede: 'Each course area has its own learners, triggers and buying cycle. Pick yours to see how we play it.',
      items: [
        {
          name: 'Health and safety',
          who: 'Site managers, supervisors and employers booking teams.',
          trigger: 'NEBOSH, IOSH, SMSTS and SSSTS for promotions, tenders and site requirements.',
          play: 'Employer group bookings plus individual career moves, with separate journeys for each.',
        },
        {
          name: 'Retrofit',
          who: 'Assessors, coordinators, installers and career changers.',
          trigger: 'PAS 2035 roles, retrofit assessor and coordinator qualifications, domestic energy assessment.',
          play: 'Growing demand from funded schemes and the retrofit skills gap. Career-led messaging and funding options up front.',
        },
        {
          name: 'Site cards and plant',
          who: 'Labourers, operatives and new entrants.',
          trigger: 'CSCS cards, the health and safety test, CPCS, NPORS and CISRS tickets.',
          play: 'High volume and fast turnaround. Local search, clear dates and prices, and booking in a few taps on mobile.',
        },
        {
          name: 'Electrical and gas',
          who: 'Electricians, engineers and career changers.',
          trigger: '18th Edition, inspection and testing, ACS gas and renewables courses.',
          play: 'Higher-value courses with longer consideration. Detailed course pages and follow-up that keeps you front of mind.',
        },
        {
          name: 'Compliance and awareness',
          who: 'Employers, FM teams and HR managers.',
          trigger: 'Asbestos awareness, fire marshal, first aid and working at height.',
          play: 'Recurring refresher training. Employer campaigns and renewal reminders that bring repeat group bookings.',
        },
      ],
    },
    problemA: 'Empty seats',
    problemB: 'cost the same to run.',
    problemLede:
      "A course costs the same to run whether it's full or half empty. Work out the enquiries you need to fill every date.",
    calc: {
      kind: 'pipeline',
      jobsLabel: 'Learners you want to book a month', jobsMin: 5, jobsMax: 200, jobs: 30,
      winLabel: 'Enquiry to booking rate', win: 25,
      valLabel: 'Average course value', valMin: 100, valMax: 5000, valStep: 50, val: 600,
      needLabel: 'Enquiries you need a month',
      yearLabel: 'Added course revenue a year',
    },
    buildHead: 'ADVRTISE.',
    buildLede1:
      'Our proprietary lead generation framework. A website no one can reach is an island. ADVRTISE builds the bridge.',
    buildLede2:
      'Five parts, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.',
    tabs: [
      {
        no: '01', name: 'Landing pages', tag: 'ADVRTISE / 01',
        head: 'Pages built to turn searches into enquiries.',
        body: 'One page per course, with dates, prices, locations and funding options up front, built to book on mobile.',
        points: [
          'One page per course and location',
          'Dates, prices and funding up front',
          'Your branding, your domain, your property',
        ],
      },
      {
        no: '02', name: 'Targeted ads', tag: 'ADVRTISE / 02',
        head: 'Campaigns aimed at the work you want.',
        body: 'Google Search for course and qualification searches, plus Meta and LinkedIn for career changers and employers booking teams.',
        points: [
          'Search themes by course and qualification',
          'Separate employer and individual journeys',
          'Spend pushed to the dates with empty seats',
        ],
      },
      TAB_TRACKING,
      {
        no: '04', name: 'Quotation forms', tag: 'ADVRTISE / 04',
        head: 'Optimised forms. Job-ready enquiries.',
        body: 'Booking-ready forms that capture course, preferred dates, number of delegates and funding route, so you can confirm places fast.',
        points: [
          'Course, dates and delegates asked up front',
          'Funding eligibility captured',
          'Group bookings flagged for a same-day call',
        ],
      },
      TAB_HANDOVER,
    ],
    lab: {
      kind: 'brands',
      lede: 'We run our own lead generation brands with our own money, including in green home improvement and retrofit. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.',
    },
    steps: steps([
      'We look at your course catalogue, margins, locations, fill rates and where bookings come from today.',
      'We build course pages and wire up tracking, so every booking traces back to the search or ad that caused it.',
      'Campaigns go live using structures already proven on our own lead-gen brands, tuned to your courses and dates.',
      'Booking forms capture course, dates, delegates and funding. You confirm places on the courses that need filling.',
    ]),
    stepsHeadA: 'Five stages.',
    stepsHeadB: 'Then the keys are yours.',
    caseStudy: {
      img: 'case-nicholas',
      alt: 'Nicholas and Co Chartered Surveyors commercial survey landing page',
      client: 'Nicholas & Co Surveyors · North London',
      statA: '32 enquiries',
      statRest: 'in month one.',
      lede: 'A dedicated landing page package with targeted ads and ongoing maintenance. The same date-led system fills course seats for training providers.',
      stats: [
        { n: '32', label: 'Residential and commercial enquiries, month one' },
        { n: '0', label: 'Enquiries shared with other firms' },
      ],
    },
    faqHead: 'What training providers ask first.',
    faqs: [
      {
        q: 'Can you fill specific course dates?',
        a: "Yes. Campaigns can push the dates and locations with the most empty seats, and ease off once they're full.",
      },
      {
        q: 'We sell to employers and individuals.',
        a: 'We run separate journeys for each: group bookings for employers, career-led messaging for individuals.',
      },
      {
        q: 'Does funding complicate things?',
        a: "It's a selling point. Funding routes are made clear on the page and captured on the form, so you know who's eligible before you call.",
      },
      ...COMMON_FAQS,
    ],
    ctaTag: 'Break ground',
    ctaHead: 'Fill every course.',
    ctaBody: "Tell us which courses you need to fill. We'll come back with a plan, not a pitch.",
    ctaBtn: 'Start a project',
  },

  /* ========================= WIDER BUILT ENVIRONMENT ===================== */
  {
    slug: 'built-environment',
    short: 'Built environment',
    crumb: '07 Wider built environment',
    title: 'ADVRT · Marketing for the wider built environment',
    description:
      'Engineers, planners, consultancies, fit-out specialists and trades. If your business lives in construction or the built environment, we build the lead generation system around your best-margin work.',
    metaTitle: 'Marketing for the built environment | ADVRT',
    metaDescription:
      'Lead generation for engineers, planners, consultancies and specialist trades. Campaigns built around your best-margin services, not generic templates.',
    h1a: 'Specialist work.',
    h1b: 'Specialist marketing.',
    lede: 'Engineers, planners, consultancies, fit-out specialists and trades. If your business lives in construction or the built environment, we build the lead generation system around your best-margin work.',
    heroCta: 'Start a project',
    marq: ['Engineers', 'Planners', 'Consultancies', 'Fit-out specialists', 'Compliance', 'Specialist trades'],
    problemA: 'Generic agencies',
    problemB: "don't speak your language.",
    problemLede:
      'Start with the numbers. How many enquiries do you need to hit your growth targets, at the win rate you actually see?',
    calc: {
      kind: 'pipeline',
      jobsLabel: 'New clients you want a month', jobsMin: 1, jobsMax: 20, jobs: 3,
      winLabel: 'Your win rate on enquiries', win: 25,
      valLabel: 'Average client value', valMin: 1000, valMax: 100000, valStep: 1000, val: 8000,
      needLabel: 'Qualified enquiries you need a month',
      yearLabel: 'Added revenue a year',
    },
    buildHead: 'ADVRTISE.',
    buildLede1:
      'Our proprietary lead generation framework. A website no one can reach is an island. ADVRTISE builds the bridge.',
    buildLede2:
      'Five parts, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.',
    tabs: [
      {
        no: '01', name: 'Landing pages', tag: 'ADVRTISE / 01',
        head: 'Pages built to turn searches into enquiries.',
        body: "One page per service, written in your clients' language, so the technical buyer and the budget holder both get what they need to pick up the phone.",
        points: [
          'One page per service line',
          'Credentials and past projects up front',
          'Your branding, your domain, your property',
        ],
      },
      {
        no: '02', name: 'Targeted ads', tag: 'ADVRTISE / 02',
        head: 'Campaigns aimed at the work you want.',
        body: 'Google Search for specialist service terms, plus LinkedIn and Meta where your buyers spend their time. Budgets weighted to the work with the best margins.',
        points: [
          'Search themes by service and sector',
          'B2B targeting by role and industry',
          'Spend weighted to your best-margin work',
        ],
      },
      TAB_TRACKING,
      {
        no: '04', name: 'Quotation forms', tag: 'ADVRTISE / 04',
        head: 'Optimised forms. Job-ready enquiries.',
        body: 'Forms that capture project type, sector, scale and timing, so you know which enquiries deserve a proposal and which need a polite no.',
        points: [
          'Project type and scale asked up front',
          'Timing and budget captured',
          'Everything you need for a first call',
        ],
      },
      TAB_HANDOVER,
    ],
    lab: {
      kind: 'brands',
      lede: 'We run our own lead generation brands across construction, property and compliance with our own money. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.',
    },
    steps: steps([
      'We look at your services, margins, ideal clients and where work comes from today, and size the demand before any spend.',
      'We build service pages and wire up tracking, so every enquiry traces back to the search or ad that caused it.',
      'Campaigns go live using structures already proven on our own lead-gen brands, tuned to your services and buyers.',
      'Forms filter on project type, scale and timing. You spend proposal time on the enquiries worth winning.',
    ]),
    stepsHeadA: 'Five stages.',
    stepsHeadB: 'Then the keys are yours.',
    caseStudy: {
      img: 'case-huxley',
      alt: 'Huxley Chartered Surveyors homepage',
      client: 'Huxley Surveyors · London and Brighton',
      statA: '49 enquiries',
      statRest: 'in month one.',
      lede: 'A ground-up build from a standing start: new lead-gen site, campaigns already proven on our own spend, and full tracking. The same system is built around any specialist service line.',
      stats: [
        { n: '49', label: 'Enquiries in the first month' },
        { n: '0', label: 'Enquiries shared with other firms' },
      ],
    },
    faqHead: 'What specialists ask first.',
    faqs: [
      {
        q: "We're niche. Is there enough demand?",
        a: "We check before we spend. The pre-spend audit sizes the demand for your services in your area, and we'll tell you straight if paid search isn't the right channel.",
      },
      {
        q: 'We sell B2B. Does this still work?',
        a: 'Yes. Longer sales cycles just mean qualification and follow-up matter more, which is where the system earns its keep.',
      },
      {
        q: 'Where do we start?',
        a: 'With an audit. We look at your services, margins and current lead sources, then build the plan around your best work.',
      },
      ...COMMON_FAQS,
    ],
    ctaTag: 'Break ground',
    ctaHead: 'Build your pipeline.',
    ctaBody: "Tell us about your firm and the work you want more of. We'll come back with a plan, not a pitch.",
    ctaBtn: 'Start a project',
  },
];

export const bySlug = new Map(sectors.map((s) => [s.slug, s]));
