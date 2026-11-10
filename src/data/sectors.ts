/**
 * Sector page content, from the night-system sector boards.
 *
 * Surveyors is bespoke on the canvas: it carries the shared-leads odds
 * calculator, the named FindMySurveyor lab and no delivery-stages section.
 * The other five are driven by a common SECTOR config with the pipeline
 * calculator, three lab cards and a stages stepper; compliance and training
 * additionally open with a disciplines section.
 */

export interface Sector {
  slug: string;
  short: string;
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  h1a: string;
  h1b: string;
  lede: string;
  proof: { n: string; k: string; c: string }[];
  disciplines: { tag: string; head: string; lede: string; items: { name: string; who: string; trigger: string; play: string }[] } | null;
  p2a: string;
  p2b: string;
  pLede: string;
  calc:
    | { kind: 'shared'; firms: number; cpl: number }
    | {
        kind: 'pipeline'; unit: string; unitPlural: string;
        jobsLabel: string; jobsMin: number; jobsMax: number; jobs: number;
        winLabel: string; win: number;
        valLabel: string; valMin: number; valMax: number; valStep: number; val: number;
        needLabel: string; yearLabel: string;
      };
  buildHead1: string;
  buildHead2: string;
  buildLede: string;
  tabs: { no: string; name: string; tag: string; head: string; body: string; points: string[] }[];
  stages: { no: string; name: string; desc: string }[] | null;
  lab:
    | { kind: 'named'; head1: string; head2: string; lede: string; stats: { n: string; k: string }[] }
    | { kind: 'cards'; head1: string; head2: string; lede: string; cards: { k: string; h: string; b: string }[] };
  caseStudy: { img: string; alt: string; client: string; title: string; lede: string; stat: string };
  faqHead: string;
  faqs: { q: string; a: string; link?: boolean }[];
  ctaHead1: string;
  ctaHead2: string;
  ctaBody: string;
}

export const sectors: Sector[] = [
  {
    "slug": "surveyors",
    "short": "Surveyors",
    "crumb": "01 Surveyors",
    "metaTitle": "Marketing for surveyors | ADVRT",
    "metaDescription": "Exclusive survey and valuation enquiries for RICS firms, never shared with four rivals. Paid search built on live surveyor data. A plan, not a pitch.",
    "h1a": "Instructions you want.",
    "h1b": "Not leads you share.",
    "lede": "Paid search and lead generation for RICS surveyors. Level 2 and 3 surveys, Help to Buy and independent valuations, delivered to you alone and qualified before they reach your inbox.",
    "proof": [
      {
        "n": "49",
        "k": "Enquiries in month one",
        "c": "Huxley Surveyors, from a standing start."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to one firm. Yours."
      },
      {
        "n": "30–40%",
        "k": "Lead to client",
        "c": "Conversion rate on our own surveyor brands."
      }
    ],
    "disciplines": null,
    "p2a": "Comparison sites sell one enquiry",
    "p2b": "to five firms.",
    "pLede": "You're fishing in someone else's pond. Move the sliders and see what that does to your odds.",
    "calc": {
      "kind": "shared",
      "firms": 5,
      "cpl": 20
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "Fast pages built to turn searches into instructions.",
        "body": "A custom static site, or focused subdomain landing pages if you'd rather keep the site you have. Every page is written for one type of instruction, so Google sees relevance and visitors see exactly what they came for.",
        "points": [
          "Built for speed: every second of load time costs conversions",
          "One page per instruction type for stronger Quality Scores",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Search campaigns built on live surveyor data.",
        "body": "Google Ads is the core lead pillar. Keywords, match types and bids come from what's already converting on our own surveyor campaigns, so day one isn't a guessing game.",
        "points": [
          "Search themes for L2, L3, Help to Buy and independent valuations",
          "Lower-competition terms where the margins are better",
          "Sits alongside your organic rankings, not instead of them"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real conversions, not clicks.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Source-level reporting on what actually converts",
          "Clean data that makes every optimisation decision easier"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Optimised forms. Job-ready enquiries.",
        "body": "A short first step captures the lead. A second step gathers property type, value, location and timescale, so you can price and call back without the back-and-forth.",
        "points": [
          "Two-stage qualification that filters out work you don't want",
          "Captures everything you need to quote",
          "Tuned on our own sites for completion rate"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to chase",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": null,
    "lab": {
      "kind": "named",
      "head1": "We run FindMySurveyor",
      "head2": "with our own money.",
      "lede": "Keywords, ad copy, bids and qualification questions all come from live surveyor data. So your campaigns start where it already works.",
      "stats": [
        {
          "n": "~10",
          "k": "Enquiries a day"
        },
        {
          "n": "10%",
          "k": "Site conversion"
        },
        {
          "n": "30–40%",
          "k": "Lead to client"
        }
      ]
    },
    "caseStudy": {
      "img": "case-huxley",
      "alt": "Huxley Chartered Surveyors homepage",
      "client": "Huxley Surveyors · London and Brighton",
      "title": "A ground-up build, from a standing start.",
      "lede": "New lead-gen site, campaigns proven on our own spend, and tracking to the penny.",
      "stat": "49"
    },
    "faqHead": "What surveyors ask first.",
    "faqs": [
      {
        "q": "I already rank organically. Why pay for ads?",
        "a": "Keep it. Paid search is incremental to organic, not a replacement. It covers the instruction types and areas you don't rank for, and the relevance signals it builds help organic and AI search too."
      },
      {
        "q": "Do I need a new website?",
        "a": "Not necessarily. If you like your site, we can build five subdomain landing pages and point the campaigns there. The aim is to make your marketing work harder, not to replace what you like."
      },
      {
        "q": "I've tried Google Ads and it didn't work.",
        "a": "Most failed accounts never get past the learning phase on a small budget. We start from structures already converting on our own surveyor sites, so you're not paying to learn."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Stop sharing",
    "ctaHead2": "leads.",
    "ctaBody": "Tell us about your firm and the instructions you want more of. A plan, not a pitch."
  },
  {
    "slug": "architects",
    "short": "Architects",
    "crumb": "02 Architects",
    "metaTitle": "Marketing for architects | ADVRT",
    "metaDescription": "Paid search and social that brings architecture practices the right commissions, qualified on budget, scope and planning status before they reach you.",
    "h1a": "The right projects.",
    "h1b": "Not just more enquiries.",
    "lede": "Paid search, social and lead generation for architecture practices. Private residential, extensions, new-builds and commercial work, qualified on budget, scope and timeline before they reach you.",
    "proof": [
      {
        "n": "49",
        "k": "Enquiries in month one",
        "c": "On a surveyors build running this exact framework."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to the firm that paid for it."
      },
      {
        "n": "100%",
        "k": "Yours to own",
        "c": "Site, campaigns, tracking and data, handed over in full."
      }
    ],
    "disciplines": null,
    "p2a": "Most practices run on referrals.",
    "p2b": "Until they don't.",
    "pLede": "Referrals are brilliant until a quiet quarter. Work out how many enquiries it actually takes to keep the studio busy.",
    "calc": {
      "kind": "pipeline",
      "unit": "commission",
      "unitPlural": "commissions",
      "jobsLabel": "Commissions you want a month",
      "jobsMin": 1,
      "jobsMax": 10,
      "jobs": 2,
      "winLabel": "Your win rate on enquiries",
      "win": 20,
      "valLabel": "Average fee",
      "valMin": 2000,
      "valMax": 100000,
      "valStep": 1000,
      "val": 15000,
      "needLabel": "Qualified enquiries you need a month",
      "yearLabel": "Added fee income a year"
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "Pages built to turn searches into enquiries.",
        "body": "Project-type pages that put the right portfolio in front of the right client: extensions for homeowners, commercial work for businesses and landlords.",
        "points": [
          "One page per project type, with the work to match",
          "Fast on mobile, where most homeowners first look",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Campaigns aimed at the work you want.",
        "body": "Google Search to catch high-intent briefs, plus Meta and Instagram to show the work to homeowners who are planning a project but haven't started searching yet.",
        "points": [
          "Search themes by project type and area",
          "Visual social campaigns led by your best work",
          "Budgets weighted towards the projects you want most"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real enquiries, not clicks.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Source-level reporting on what actually converts",
          "Clean data behind every optimisation decision"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Optimised forms. Job-ready enquiries.",
        "body": "A brief form that captures project type, budget, site, planning status and timeline, so you only take the calls worth taking.",
        "points": [
          "Budget and scope asked up front",
          "Filters out work below your minimum fee",
          "Everything you need for a first conversation"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to chase",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": [
      {
        "no": "01",
        "name": "Audit",
        "desc": "We look at your portfolio, the projects you want more of, your minimum fee and where your work comes from today."
      },
      {
        "no": "02",
        "name": "Lead hub",
        "desc": "We build project-type pages around your best work and wire up tracking, so every brief traces back to its source."
      },
      {
        "no": "03",
        "name": "Campaigns",
        "desc": "Search and social campaigns go live using structures already proven on our own lead-gen brands, tuned to your practice."
      },
      {
        "no": "04",
        "name": "Qualify",
        "desc": "The brief form filters on budget, scope and planning status. You call back the projects worth a meeting."
      },
      {
        "no": "05",
        "name": "Hand over",
        "desc": "A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us."
      }
    ],
    "lab": {
      "kind": "cards",
      "head1": "Proven in the field.",
      "head2": "Then built for you.",
      "lede": "We run our own lead generation brands with our own money. What works there gets rebuilt around how homeowners and businesses actually choose a practice, so you skip the learning phase other agencies bill you for.",
      "cards": [
        {
          "k": "01",
          "h": "Our money first",
          "b": "We run our own lead generation brands on our own budget. Every keyword, form and follow-up is tested where a bad decision costs us, not you."
        },
        {
          "k": "02",
          "h": "Rebuilt for the brief",
          "b": "Homeowners choose a practice on the work. Pages lead with the portfolio, and the form asks budget before you spend an hour on a call."
        },
        {
          "k": "03",
          "h": "No learning phase on your bill",
          "b": "Your campaigns start from structures already converting, so you aren't paying Google to teach us the basics of your market."
        }
      ]
    },
    "caseStudy": {
      "img": "case-nicholas",
      "alt": "Nicholas and Co Chartered Surveyors landing page",
      "client": "Nicholas & Co Surveyors · North London",
      "title": "A landing page package with targeted ads.",
      "lede": "Residential and commercial, with ongoing maintenance keeping it sharp. The same system wins briefs for practices.",
      "stat": "32"
    },
    "faqHead": "What practices ask first.",
    "faqs": [
      {
        "q": "Will paid ads cheapen our brand?",
        "a": "Not if they're done properly. We lead with the work, target the projects you want and keep the tone in line with your practice."
      },
      {
        "q": "We mostly win through referrals. Why change?",
        "a": "Keep them. Paid lead generation adds a pipeline you control, so a quiet referral month doesn't mean a quiet studio."
      },
      {
        "q": "Can you filter out small jobs?",
        "a": "Yes. The brief form asks budget and scope up front, and we exclude searches and audiences that don't fit your minimum fee."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Fill the studio",
    "ctaHead2": "diary.",
    "ctaBody": "Tell us which projects you want more of. We'll come back with a plan, not a pitch."
  },
  {
    "slug": "contractors",
    "short": "Contractors",
    "crumb": "04 Contractors",
    "metaTitle": "Marketing for specialist contractors | ADVRT",
    "metaDescription": "Exclusive, high-value enquiries for specialist contractors: damp proofing, asbestos, air conditioning and fire protection. Qualified on scope and budget.",
    "h1a": "Work you choose.",
    "h1b": "Not jobs you chase.",
    "lede": "Lead generation for specialist contractors. Damp proofing and structural waterproofing, asbestos, air conditioning and ventilation, fire protection and the rest of the high-value trades, in the specialisms and regions you prioritise.",
    "proof": [
      {
        "n": "49",
        "k": "Enquiries in month one",
        "c": "On a build running this exact framework."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to the firm that paid for it."
      },
      {
        "n": "100%",
        "k": "Yours to own",
        "c": "Site, campaigns, tracking and data, handed over in full."
      }
    ],
    "disciplines": null,
    "p2a": "Ten good contracts",
    "p2b": "beat a hundred quotes.",
    "pLede": "Specialist work is bought on expertise, not on price, and one contract can be worth a month of small jobs. Work out how many enquiries it takes to keep the diary full at the win rate you actually see.",
    "calc": {
      "kind": "pipeline",
      "unit": "contract",
      "unitPlural": "contracts",
      "jobsLabel": "Contracts you want to win a month",
      "jobsMin": 1,
      "jobsMax": 25,
      "jobs": 4,
      "winLabel": "Your win rate after survey",
      "win": 30,
      "valLabel": "Average contract value",
      "valMin": 1000,
      "valMax": 150000,
      "valStep": 1000,
      "val": 12000,
      "needLabel": "Qualified enquiries you need a month",
      "yearLabel": "Added turnover a year"
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "A page per specialism, not a services list.",
        "body": "Someone searching for a damp survey in Bristol is not browsing. They land on a page about that one specialism in that one area, with the accreditations and completed works that decide who gets the call.",
        "points": [
          "One page per specialism and service area",
          "Accreditations, memberships and guarantees front and centre",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Campaigns aimed at the contracts worth having.",
        "body": "Google Search built around specialist intent: the surveys, remedial works and installations you want, in the postcodes you cover, filtered away from the small jobs and the price shoppers.",
        "points": [
          "Search themes by specialism, not by trade in general",
          "Radius and postcode targeting matched to your coverage",
          "Low-value and out-of-scope searches excluded, not just outbid"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it, and reported by specialism, so you can see which line of work actually pays and move budget towards it.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Reporting split by specialism and contract value",
          "Clean data behind every optimisation decision"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Forms that qualify a survey, not a tyre-kick.",
        "body": "Specialist work usually needs a survey before anyone can price it. The form asks property type, the problem, access, budget range and timescale, so the enquiries you call back are the ones worth a van and an afternoon.",
        "points": [
          "Problem, property type and access asked up front",
          "Budget range and timescale captured before you commit a survey",
          "Out-of-area and out-of-scope enquiries filtered out"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to survey first",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": [
      {
        "no": "01",
        "name": "Audit",
        "desc": "We look at the specialisms and contract sizes you want more of, your coverage, your accreditations and where work comes from today."
      },
      {
        "no": "02",
        "name": "Lead hub",
        "desc": "We build a page per specialism and area and wire up tracking, so every enquiry traces back to the search that caused it."
      },
      {
        "no": "03",
        "name": "Campaigns",
        "desc": "Search campaigns go live using structures already proven on our own lead-gen brands, tuned to your specialisms and patch."
      },
      {
        "no": "04",
        "name": "Qualify",
        "desc": "Forms filter on the problem, the property, budget and timescale. You survey the contracts worth pricing and leave the rest."
      },
      {
        "no": "05",
        "name": "Hand over",
        "desc": "A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us."
      }
    ],
    "lab": {
      "kind": "cards",
      "head1": "Proven in the field.",
      "head2": "Then built for you.",
      "lede": "We run our own lead generation brands with our own money, including property-maintenance and remedial-works verticals where the buyer has a problem and a deadline. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.",
      "cards": [
        {
          "k": "01",
          "h": "Our money first",
          "b": "We run our own lead generation brands on our own budget. Every keyword, form and follow-up is tested where a bad decision costs us, not you."
        },
        {
          "k": "02",
          "h": "Built for the survey",
          "b": "Specialist buyers want certainty and a date, not the cheapest number. Pages lead with accreditations and guarantees, and the form earns you the survey."
        },
        {
          "k": "03",
          "h": "No learning phase on your bill",
          "b": "Your campaigns start from structures already converting, so you aren't paying Google to teach us the basics of your specialism."
        }
      ]
    },
    "caseStudy": {
      "img": "case-foundation",
      "alt": "Foundation Chartered Surveyors landing page",
      "client": "Foundation Surveyors · North London",
      "title": "A bespoke build on their existing site.",
      "lede": "Custom landing pages engineered into the site they already had, with ads, tracking and CRM integration. The same bolt-on build works for a specialist contractor with a site worth keeping.",
      "stat": "26"
    },
    "faqHead": "What specialist contractors ask first.",
    "faqs": [
      {
        "q": "We do several specialisms. Does one campaign cover them?",
        "a": "No, and it shouldn't. Each specialism gets its own pages and its own search themes, because a damp survey and an air conditioning install are bought by different people for different reasons. You see which one earns its budget."
      },
      {
        "q": "Most of our work comes through main contractors and agents.",
        "a": "That keeps running. This builds a direct pipeline alongside it, which usually carries better margins and less waiting to be paid, and makes you less dependent on two or three relationships."
      },
      {
        "q": "How do you keep the small jobs out?",
        "a": "Two ways. The campaigns target the searches that signal real scope rather than every variation of your trade, and the form asks for the problem, the property and a budget range before it reaches you."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Fill the order",
    "ctaHead2": "book.",
    "ctaBody": "Tell us which specialisms you want more of and where. We'll come back with a plan, not a pitch."
  },
  {
    "slug": "compliance",
    "short": "Compliance",
    "crumb": "05 Compliance",
    "metaTitle": "Marketing for compliance firms | ADVRT",
    "metaDescription": "Fill the diary with EPC, EICR, gas safety and fire risk assessment bookings. Local paid search built for buyers who need the certificate this week.",
    "h1a": "Inspections booked.",
    "h1b": "Not quotes chased.",
    "lede": "Lead generation for compliance and inspection businesses. EPCs, EICRs, gas safety checks, fire risk assessments and more, from landlords, agents and businesses who need the certificate by a date.",
    "proof": [
      {
        "n": "49",
        "k": "Enquiries in month one",
        "c": "On a surveyors build running this exact framework."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to the firm that paid for it."
      },
      {
        "n": "100%",
        "k": "Yours to own",
        "c": "Site, campaigns, tracking and data, handed over in full."
      }
    ],
    "disciplines": {
      "tag": "Disciplines",
      "head": "Every certificate. One system.",
      "lede": "Each discipline has its own buyers, triggers and margins. Pick yours to see how we play it.",
      "items": [
        {
          "name": "EPCs",
          "who": "Landlords, letting agents, sellers and commercial owners.",
          "trigger": "Selling, letting, MEES minimum standards and funding schemes.",
          "play": "Volume at speed. Local search, instant prices and online booking, so the job is in the diary before a competitor calls back."
        },
        {
          "name": "EICRs",
          "who": "Landlords, letting agents and homeowners.",
          "trigger": "Five-yearly rental inspections, sales and remedial work.",
          "play": "Recurring local demand. Area pages, landlord and agent journeys, and a clear route into remedial quotes."
        },
        {
          "name": "Gas safety",
          "who": "Landlords, agents and homeowners.",
          "trigger": "Annual landlord gas safety certificates and boiler servicing.",
          "play": "Repeat business. Search for urgent renewals plus reminder campaigns that bring the same landlords back every year."
        },
        {
          "name": "Fire risk assessments",
          "who": "Responsible persons for HMOs, blocks, offices and businesses.",
          "trigger": "Fire Safety Order duties, building changes and insurer requests.",
          "play": "Higher-value B2B work. Forms qualify by premises type, size and occupancy, so you quote accurately first time."
        },
        {
          "name": "Asbestos and legionella",
          "who": "Commercial landlords, schools, FM firms and contractors.",
          "trigger": "Refurbishment, duty to manage and water hygiene obligations.",
          "play": "Specialist long-tail searches. Pages by survey type and sector, built for buyers who know exactly what they need."
        }
      ]
    },
    "p2a": "Certificates are a race.",
    "p2b": "Speed wins the booking.",
    "pLede": "Compliance buyers want it booked, not discussed. Work out the enquiry volume you need to fill the diary.",
    "calc": {
      "kind": "pipeline",
      "unit": "inspection",
      "unitPlural": "inspections",
      "jobsLabel": "Inspections you want to book a month",
      "jobsMin": 5,
      "jobsMax": 200,
      "jobs": 40,
      "winLabel": "Enquiry to booking rate",
      "win": 40,
      "valLabel": "Average job value",
      "valMin": 50,
      "valMax": 2000,
      "valStep": 10,
      "val": 120,
      "needLabel": "Enquiries you need a month",
      "yearLabel": "Added revenue a year"
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "Pages built to turn searches into enquiries.",
        "body": "One page per discipline and area, with prices, turnaround times and booking front and centre. EPCs in Leeds and EICRs in Leeds each get the page they deserve.",
        "points": [
          "One page per discipline and service area",
          "Prices and turnaround times up front",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Campaigns aimed at the work you want.",
        "body": "Google Search for high-intent certificate searches by discipline and postcode, plus reminder campaigns for repeat inspections like annual gas safety.",
        "points": [
          "Search themes by discipline and postcode",
          "Separate journeys for landlords, agents and businesses",
          "Repeat-inspection reminder campaigns"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real enquiries, not clicks.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Source-level reporting on what actually converts",
          "Clean data behind every optimisation decision"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Optimised forms. Job-ready enquiries.",
        "body": "Short forms that capture property type, size, location and deadline, so you can quote instantly or book straight into the diary.",
        "points": [
          "Property type and deadline asked up front",
          "Instant-quote options for fixed-price work",
          "Hot bookings flagged for a same-day call"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to chase",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": [
      {
        "no": "01",
        "name": "Audit",
        "desc": "We look at your disciplines, margins, coverage area and where bookings come from today."
      },
      {
        "no": "02",
        "name": "Lead hub",
        "desc": "We build discipline and area pages and wire up tracking, so every booking traces back to its source."
      },
      {
        "no": "03",
        "name": "Campaigns",
        "desc": "Campaigns go live using structures already proven on our own lead-gen brands, tuned to your disciplines and patch."
      },
      {
        "no": "04",
        "name": "Qualify",
        "desc": "Forms capture property type, size and deadline. You quote fast and book the jobs worth taking."
      },
      {
        "no": "05",
        "name": "Hand over",
        "desc": "A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us."
      }
    ],
    "lab": {
      "kind": "cards",
      "head1": "Proven in the field.",
      "head2": "Then built for you.",
      "lede": "We run our own lead generation brands in property and compliance with our own money, including EPCs. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.",
      "cards": [
        {
          "k": "01",
          "h": "Our money first",
          "b": "We run our own lead generation brands on our own budget. Every keyword, form and follow-up is tested where a bad decision costs us, not you."
        },
        {
          "k": "02",
          "h": "Rebuilt for the deadline",
          "b": "Compliance buyers have a date to hit. Pages lead with price and turnaround, and the form captures the deadline so the urgent jobs reach you first."
        },
        {
          "k": "03",
          "h": "No learning phase on your bill",
          "b": "Your campaigns start from structures already converting, so you aren't paying Google to teach us the basics of your market."
        }
      ]
    },
    "caseStudy": {
      "img": "case-huxley",
      "alt": "Huxley Chartered Surveyors homepage",
      "client": "Huxley Surveyors · London and Brighton",
      "title": "A ground-up build, from a standing start.",
      "lede": "New lead-gen site, campaigns proven on our own spend, and tracking to the penny.",
      "stat": "49"
    },
    "faqHead": "What inspectors ask first.",
    "faqs": [
      {
        "q": "We cover several disciplines. One campaign or several?",
        "a": "One system, structured by discipline. Each gets its own pages and campaigns, so you can push the work with the best margins and dial back the rest."
      },
      {
        "q": "Can you win landlord and agent accounts, not just one-offs?",
        "a": "Yes. We run separate journeys for portfolio landlords and letting agents, where one relationship means repeat work."
      },
      {
        "q": "Price-shopping is brutal in our sector.",
        "a": "That's why speed matters. Clear prices, instant quotes and fast call-backs give you the best shot at the booking, not just the cheapest number."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Fill the",
    "ctaHead2": "diary.",
    "ctaBody": "Tell us which disciplines you want more of and where. We'll come back with a plan, not a pitch."
  },
  {
    "slug": "fire-protection",
    "short": "Fire protection",
    "crumb": "Fire protection",
    "metaTitle": "Marketing for fire protection companies | ADVRT",
    "metaDescription": "Lead generation for fire protection firms: risk assessments, extinguishers, alarms, emergency lighting and passive fire protection. Exclusive, qualified enquiries.",
    "h1a": "Contracts, not callouts.",
    "h1b": "Compliance that recurs.",
    "lede": "Lead generation for fire protection companies. Fire risk assessments, extinguisher supply and servicing, alarms and emergency lighting, sprinklers and passive protection — enquiries qualified on premises, scope and renewal date before they reach you.",
    "proof": [
      {
        "n": "2,400+",
        "k": "Fire searches a year",
        "c": "Measured on our own compliance brand, across 336 distinct queries."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to the firm that paid for it."
      },
      {
        "n": "100%",
        "k": "Yours to own",
        "c": "Site, campaigns, tracking and data, handed over in full."
      }
    ],
    "disciplines": {
      "tag": "Disciplines",
      "head": "One industry. Five different buyers.",
      "lede": "Fire protection is sold to a duty holder, a facilities manager and a main contractor, and none of them search the same way. Pick yours to see how we play it.",
      "items": [
        {
          "name": "Risk assessments",
          "who": "Responsible persons, landlords, managing agents and employers.",
          "trigger": "The Fire Safety Order, insurance renewal, a new tenancy or an enforcement notice.",
          "play": "The biggest search cluster in the sector — “fire risk assessment” alone runs at 565 searches a year on our own brand. Own the obligation question and the assessment books itself."
        },
        {
          "name": "Extinguishers",
          "who": "Office managers, site managers and small business owners.",
          "trigger": "Annual service due, a failed inspection, a fit-out or a move.",
          "play": "Buyers arrive asking which type and what it costs, not who to hire. Answer the type and price questions and you are the firm they call."
        },
        {
          "name": "Alarms and detection",
          "who": "Facilities managers, developers and main contractors.",
          "trigger": "Install, takeover of a maintenance contract, or a system at end of life.",
          "play": "Higher value, longer decision. Pages built around system type and building class, with a form that captures premises size before anyone quotes."
        },
        {
          "name": "Emergency lighting",
          "who": "Facilities and property managers.",
          "trigger": "Monthly and annual testing regimes, or a compliance gap found at audit.",
          "play": "Almost always bundled. We use it as the entry point to a wider maintenance contract rather than pricing it alone."
        },
        {
          "name": "Passive protection",
          "who": "Main contractors, developers and housing associations.",
          "trigger": "Building Safety Act duties, remediation programmes and fire door inspections.",
          "play": "Tender-shaped and accreditation-led. Pages lead with third-party certification and completed schemes, because that is what gets you on the list."
        }
      ]
    },
    "p2a": "Compliance work renews.",
    "p2b": "So should the pipeline.",
    "pLede": "A fire contract is rarely one job — it is an assessment, then a service schedule, then the remedial work. Work out what the first enquiry is actually worth once it renews.",
    "calc": {
      "kind": "pipeline",
      "unit": "contract",
      "unitPlural": "contracts",
      "jobsLabel": "Contracts you want to win a month",
      "jobsMin": 1,
      "jobsMax": 40,
      "jobs": 6,
      "winLabel": "Enquiry to contract rate",
      "win": 35,
      "valLabel": "First-year contract value",
      "valMin": 150,
      "valMax": 40000,
      "valStep": 50,
      "val": 1800,
      "needLabel": "Qualified enquiries you need a month",
      "yearLabel": "Added revenue a year"
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "A page per discipline, and per building type.",
        "body": "A responsible person looking for a risk assessment and a main contractor looking for passive protection are not the same buyer. Each gets a page that names their obligation, their building and their deadline.",
        "points": [
          "One page per discipline and premises type",
          "Accreditations and third-party certification front and centre",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Campaigns built on the obligation, not the trade.",
        "body": "Search themes follow how fire work is actually bought: the duty, the renewal date and the cost. We target the questions buyers ask before they look for a contractor, in the areas you cover.",
        "points": [
          "Search themes by discipline and by duty",
          "Radius and postcode targeting matched to your coverage",
          "Domestic and out-of-scope enquiries excluded, not just outbid"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it, and reported by discipline, so you can see which line of work pays and move budget towards it.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Reporting split by discipline and contract value",
          "Clean data behind every optimisation decision"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Forms that qualify a contract, not a callout.",
        "body": "The form asks premises type, floor area, number of units, current provider and renewal date — so you know whether you are quoting a single extinguisher service or a multi-site maintenance contract before you pick up the phone.",
        "points": [
          "Premises type, size and occupancy asked up front",
          "Current provider and renewal date captured",
          "Single callouts separated from contract opportunities"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to quote first",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": [
      {
        "no": "01",
        "name": "Audit",
        "desc": "We look at the disciplines and contract sizes you want more of, your accreditations, your coverage and where work comes from today."
      },
      {
        "no": "02",
        "name": "Lead hub",
        "desc": "We build a page per discipline and premises type and wire up tracking, so every enquiry traces back to the search that caused it."
      },
      {
        "no": "03",
        "name": "Campaigns",
        "desc": "Search campaigns go live using structures already proven on our own compliance brand, tuned to your disciplines and patch."
      },
      {
        "no": "04",
        "name": "Qualify",
        "desc": "Forms filter on premises, scope, current provider and renewal date. You quote the contracts worth winning."
      },
      {
        "no": "05",
        "name": "Hand over",
        "desc": "A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us."
      }
    ],
    "lab": {
      "kind": "cards",
      "head1": "Proven in the field.",
      "head2": "Then built for you.",
      "lede": "We run our own compliance lead generation brand with our own money, and fire is its largest category — 2,400 searches a year across 336 distinct queries. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.",
      "cards": [
        {
          "k": "01",
          "h": "Our money first",
          "b": "We run our own compliance brand on our own budget. Every keyword, form and follow-up is tested where a bad decision costs us, not you."
        },
        {
          "k": "02",
          "h": "Built for the obligation",
          "b": "Fire buyers search the duty and the cost long before they search for a contractor. The pages answer the rule, and the form earns the quote."
        },
        {
          "k": "03",
          "h": "No learning phase on your bill",
          "b": "Your campaigns start from structures already converting, so you aren't paying Google to teach us the basics of fire compliance."
        }
      ]
    },
    "caseStudy": {
      "img": "case-huxley",
      "alt": "Huxley Chartered Surveyors homepage",
      "client": "Huxley Surveyors · London and Brighton",
      "title": "A ground-up build, from a standing start.",
      "lede": "New lead-gen site, campaigns proven on our own spend, and tracking to the penny.",
      "stat": "49"
    },
    "faqHead": "What fire protection firms ask first.",
    "faqs": [
      {
        "q": "We do assessments, extinguishers and alarms. One campaign or three?",
        "a": "Three, at least. A responsible person booking a risk assessment and a contractor specifying an alarm system are different people with different budgets and timescales. Each discipline gets its own pages and search themes, and you see which one earns its budget."
      },
      {
        "q": "Most of our work is recurring. Is paid search worth it?",
        "a": "That is the argument for it, not against. If a first contract renews for years, you can afford to pay more for the enquiry than a firm selling one-off jobs — and the maths section above is how we work out how much."
      },
      {
        "q": "How do you keep domestic callouts out?",
        "a": "Two ways. Campaigns target commercial premises language rather than every variation of the trade, and the form asks premises type and size before the enquiry reaches you."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Fill the",
    "ctaHead2": "schedule.",
    "ctaBody": "Tell us which disciplines you want more of and where. We'll come back with a plan, not a pitch."
  },
  {
    "slug": "training",
    "short": "Training",
    "crumb": "06 Training",
    "metaTitle": "Marketing for training providers | ADVRT",
    "metaDescription": "Fill every course date. Paid search and social for built-environment training providers, with separate journeys for employers and individual learners.",
    "h1a": "Full courses.",
    "h1b": "Not empty seats.",
    "lede": "Lead generation for training providers serving the built environment. Health and safety, retrofit, site cards, technical and compliance courses, filled with learners and employers who are ready to book.",
    "proof": [
      {
        "n": "49",
        "k": "Enquiries in month one",
        "c": "On a surveyors build running this exact framework."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to the firm that paid for it."
      },
      {
        "n": "100%",
        "k": "Yours to own",
        "c": "Site, campaigns, tracking and data, handed over in full."
      }
    ],
    "disciplines": {
      "tag": "Course areas",
      "head": "Every course. One system.",
      "lede": "Each course area has its own learners, triggers and buying cycle. Pick yours to see how we play it.",
      "items": [
        {
          "name": "Health and safety",
          "who": "Site managers, supervisors and employers booking teams.",
          "trigger": "NEBOSH, IOSH, SMSTS and SSSTS for promotions, tenders and site requirements.",
          "play": "Employer group bookings plus individual career moves, with separate journeys for each."
        },
        {
          "name": "Retrofit",
          "who": "Assessors, coordinators, installers and career changers.",
          "trigger": "PAS 2035 roles, retrofit assessor and coordinator qualifications, domestic energy assessment.",
          "play": "Growing demand from funded schemes and the retrofit skills gap. Career-led messaging and funding options up front."
        },
        {
          "name": "Site cards and plant",
          "who": "Labourers, operatives and new entrants.",
          "trigger": "CSCS cards, the health and safety test, CPCS, NPORS and CISRS tickets.",
          "play": "High volume and fast turnaround. Local search, clear dates and prices, and booking in a few taps on mobile."
        },
        {
          "name": "Electrical and gas",
          "who": "Electricians, engineers and career changers.",
          "trigger": "18th Edition, inspection and testing, ACS gas and renewables courses.",
          "play": "Higher-value courses with longer consideration. Detailed course pages and follow-up that keeps you front of mind."
        },
        {
          "name": "Compliance and awareness",
          "who": "Employers, FM teams and HR managers.",
          "trigger": "Asbestos awareness, fire marshal, first aid and working at height.",
          "play": "Recurring refresher training. Employer campaigns and renewal reminders that bring repeat group bookings."
        }
      ]
    },
    "p2a": "Empty seats",
    "p2b": "cost the same to run.",
    "pLede": "A course costs the same to run whether it's full or half empty. Work out the enquiries you need to fill every date.",
    "calc": {
      "kind": "pipeline",
      "unit": "learner",
      "unitPlural": "learners",
      "jobsLabel": "Learners you want to book a month",
      "jobsMin": 5,
      "jobsMax": 200,
      "jobs": 30,
      "winLabel": "Enquiry to booking rate",
      "win": 25,
      "valLabel": "Average course value",
      "valMin": 100,
      "valMax": 5000,
      "valStep": 50,
      "val": 600,
      "needLabel": "Enquiries you need a month",
      "yearLabel": "Added course revenue a year"
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "Pages built to turn searches into enquiries.",
        "body": "One page per course, with dates, prices, locations and funding options up front, built to book on mobile.",
        "points": [
          "One page per course and location",
          "Dates, prices and funding up front",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Campaigns aimed at the work you want.",
        "body": "Google Search for course and qualification searches, plus Meta and LinkedIn for career changers and employers booking teams.",
        "points": [
          "Search themes by course and qualification",
          "Separate employer and individual journeys",
          "Spend pushed to the dates with empty seats"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real enquiries, not clicks.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Source-level reporting on what actually converts",
          "Clean data behind every optimisation decision"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Optimised forms. Job-ready enquiries.",
        "body": "Booking-ready forms that capture course, preferred dates, number of delegates and funding route, so you can confirm places fast.",
        "points": [
          "Course, dates and delegates asked up front",
          "Funding eligibility captured",
          "Group bookings flagged for a same-day call"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to chase",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": [
      {
        "no": "01",
        "name": "Audit",
        "desc": "We look at your course catalogue, margins, locations, fill rates and where bookings come from today."
      },
      {
        "no": "02",
        "name": "Lead hub",
        "desc": "We build course pages and wire up tracking, so every booking traces back to the search or ad that caused it."
      },
      {
        "no": "03",
        "name": "Campaigns",
        "desc": "Campaigns go live using structures already proven on our own lead-gen brands, tuned to your courses and dates."
      },
      {
        "no": "04",
        "name": "Qualify",
        "desc": "Booking forms capture course, dates, delegates and funding. You confirm places on the courses that need filling."
      },
      {
        "no": "05",
        "name": "Hand over",
        "desc": "A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us."
      }
    ],
    "lab": {
      "kind": "cards",
      "head1": "Proven in the field.",
      "head2": "Then built for you.",
      "lede": "We run our own lead generation brands with our own money, including in green home improvement and retrofit. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.",
      "cards": [
        {
          "k": "01",
          "h": "Our money first",
          "b": "We run our own lead generation brands on our own budget. Every keyword, form and follow-up is tested where a bad decision costs us, not you."
        },
        {
          "k": "02",
          "h": "Rebuilt for the booking",
          "b": "Learners book on dates, price and location. Pages put all three above the fold, and spend follows the courses with seats still empty."
        },
        {
          "k": "03",
          "h": "No learning phase on your bill",
          "b": "Your campaigns start from structures already converting, so you aren't paying Google to teach us the basics of your market."
        }
      ]
    },
    "caseStudy": {
      "img": "case-nicholas",
      "alt": "Nicholas and Co Chartered Surveyors landing page",
      "client": "Nicholas & Co Surveyors · North London",
      "title": "A landing page package with targeted ads.",
      "lede": "A dedicated package with ongoing maintenance. The same date-led system fills course seats.",
      "stat": "32"
    },
    "faqHead": "What training providers ask first.",
    "faqs": [
      {
        "q": "Can you fill specific course dates?",
        "a": "Yes. Campaigns can push the dates and locations with the most empty seats, and ease off once they're full."
      },
      {
        "q": "We sell to employers and individuals.",
        "a": "We run separate journeys for each: group bookings for employers, career-led messaging for individuals."
      },
      {
        "q": "Does funding complicate things?",
        "a": "It's a selling point. Funding routes are made clear on the page and captured on the form, so you know who's eligible before you call."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Fill every",
    "ctaHead2": "course.",
    "ctaBody": "Tell us which courses you need to fill. We'll come back with a plan, not a pitch."
  },
  {
    "slug": "built-environment",
    "short": "Built environment",
    "crumb": "07 Wider built environment",
    "metaTitle": "Marketing for the built environment | ADVRT",
    "metaDescription": "Lead generation for engineers, planners, consultancies and specialist trades. Campaigns built around your best-margin services, not generic templates.",
    "h1a": "Specialist work.",
    "h1b": "Specialist marketing.",
    "lede": "Engineers, planners, consultancies, fit-out specialists and trades. If your business lives in construction or the built environment, we build the lead generation system around your best-margin work.",
    "proof": [
      {
        "n": "49",
        "k": "Enquiries in month one",
        "c": "On a surveyors build running this exact framework."
      },
      {
        "n": "0",
        "k": "Shared with rivals",
        "c": "Every enquiry exclusive to the firm that paid for it."
      },
      {
        "n": "100%",
        "k": "Yours to own",
        "c": "Site, campaigns, tracking and data, handed over in full."
      }
    ],
    "disciplines": null,
    "p2a": "Generic agencies",
    "p2b": "don't speak your language.",
    "pLede": "Start with the numbers. How many enquiries do you need to hit your growth targets, at the win rate you actually see?",
    "calc": {
      "kind": "pipeline",
      "unit": "client",
      "unitPlural": "clients",
      "jobsLabel": "New clients you want a month",
      "jobsMin": 1,
      "jobsMax": 20,
      "jobs": 3,
      "winLabel": "Your win rate on enquiries",
      "win": 25,
      "valLabel": "Average client value",
      "valMin": 1000,
      "valMax": 100000,
      "valStep": 1000,
      "val": 8000,
      "needLabel": "Qualified enquiries you need a month",
      "yearLabel": "Added revenue a year"
    },
    "buildHead1": "Five parts.",
    "buildHead2": "Nothing leaks.",
    "buildLede": "Our proprietary lead generation framework, built together and tested on our own spend, so nothing leaks between the search, the click, the form and the call back.",
    "tabs": [
      {
        "no": "01",
        "name": "Landing pages",
        "tag": "ADVRTISE / 01",
        "head": "Pages built to turn searches into enquiries.",
        "body": "One page per service, written in your clients' language, so the technical buyer and the budget holder both get what they need to pick up the phone.",
        "points": [
          "One page per service line",
          "Credentials and past projects up front",
          "Your branding, your domain, your property"
        ]
      },
      {
        "no": "02",
        "name": "Targeted ads",
        "tag": "ADVRTISE / 02",
        "head": "Campaigns aimed at the work you want.",
        "body": "Google Search for specialist service terms, plus LinkedIn and Meta where your buyers spend their time. Budgets weighted to the work with the best margins.",
        "points": [
          "Search themes by service and sector",
          "B2B targeting by role and industry",
          "Spend weighted to your best-margin work"
        ]
      },
      {
        "no": "03",
        "name": "Tracking",
        "tag": "ADVRTISE / 03",
        "head": "Rock-solid tracking and attribution.",
        "body": "Every enquiry traced back to the search, ad and keyword that caused it. You see what each pound bought, and we optimise on real enquiries, not clicks.",
        "points": [
          "Conversion tracking from click to enquiry",
          "Source-level reporting on what actually converts",
          "Clean data behind every optimisation decision"
        ]
      },
      {
        "no": "04",
        "name": "Quotation forms",
        "tag": "ADVRTISE / 04",
        "head": "Optimised forms. Job-ready enquiries.",
        "body": "Forms that capture project type, sector, scale and timing, so you know which enquiries deserve a proposal and which need a polite no.",
        "points": [
          "Project type and scale asked up front",
          "Timing and budget captured",
          "Everything you need for a first call"
        ]
      },
      {
        "no": "05",
        "name": "Handover",
        "tag": "ADVRTISE / 05",
        "head": "You get the keys, with full confidence.",
        "body": "Nothing gets handed over until it works and you know how to run it. Campaigns, lead flow, what to chase and when: all documented, all yours. Prefer we keep driving? Ongoing management and optimisation is available, and included in some packages.",
        "points": [
          "A proper walkthrough on your own accounts",
          "Lead handling: response speed, follow-up, which enquiries to chase",
          "You own the site, the campaigns and the data",
          "We stay on hand to support and scale"
        ]
      }
    ],
    "stages": [
      {
        "no": "01",
        "name": "Audit",
        "desc": "We look at your services, margins, ideal clients and where work comes from today, and size the demand before any spend."
      },
      {
        "no": "02",
        "name": "Lead hub",
        "desc": "We build service pages and wire up tracking, so every enquiry traces back to the search or ad that caused it."
      },
      {
        "no": "03",
        "name": "Campaigns",
        "desc": "Campaigns go live using structures already proven on our own lead-gen brands, tuned to your services and buyers."
      },
      {
        "no": "04",
        "name": "Qualify",
        "desc": "Forms filter on project type, scale and timing. You spend proposal time on the enquiries worth winning."
      },
      {
        "no": "05",
        "name": "Hand over",
        "desc": "A full-confidence handover: everything working, documented and walked through, then the keys are yours. We stay on hand to support and scale when you need us."
      }
    ],
    "lab": {
      "kind": "cards",
      "head1": "Proven in the field.",
      "head2": "Then built for you.",
      "lede": "We run our own lead generation brands across construction, property and compliance with our own money. What works there gets built into your campaigns, so you skip the learning phase other agencies bill you for.",
      "cards": [
        {
          "k": "01",
          "h": "Our money first",
          "b": "We run our own lead generation brands on our own budget. Every keyword, form and follow-up is tested where a bad decision costs us, not you."
        },
        {
          "k": "02",
          "h": "Rebuilt for the proposal",
          "b": "Specialist buyers need credentials before conversation. Pages lead with the work, and the form filters on scale and timing so proposals go to the right enquiries."
        },
        {
          "k": "03",
          "h": "No learning phase on your bill",
          "b": "Your campaigns start from structures already converting, so you aren't paying Google to teach us the basics of your market."
        }
      ]
    },
    "caseStudy": {
      "img": "case-huxley",
      "alt": "Huxley Chartered Surveyors homepage",
      "client": "Huxley Surveyors · London and Brighton",
      "title": "A ground-up build, from a standing start.",
      "lede": "New lead-gen site, campaigns proven on our own spend, and full tracking. The same system is built around any specialist service line.",
      "stat": "49"
    },
    "faqHead": "What specialists ask first.",
    "faqs": [
      {
        "q": "We're niche. Is there enough demand?",
        "a": "We check before we spend. The pre-spend audit sizes the demand for your services in your area, and we'll tell you straight if paid search isn't the right channel."
      },
      {
        "q": "We sell B2B. Does this still work?",
        "a": "Yes. Longer sales cycles just mean qualification and follow-up matter more, which is where the system earns its keep."
      },
      {
        "q": "Where do we start?",
        "a": "With an audit. We look at your services, margins and current lead sources, then build the plan around your best work."
      },
      {
        "q": "Where do the leads go?",
        "a": "Wherever you work today. ADVRTISE integrates with your existing tech stack, even if that's just an email inbox. When you're ready to grow, we can deploy a CRM with contact management and instant replies."
      },
      {
        "q": "Can my own team run it?",
        "a": "Yes. Every build ends with a full-confidence handover, so you or your team can manage the campaigns and handle the leads properly. If you'd rather we keep optimising, we're here for that too."
      },
      {
        "q": "What does it cost?",
        "a": "Every build is scoped to your firm, your patch and the work you want more of, so everything is bespoke. Start an enquiry and we'll come back with a plan and a number.",
        "link": true
      }
    ],
    "ctaHead1": "Build your",
    "ctaHead2": "pipeline.",
    "ctaBody": "Tell us about your firm and the work you want more of. We'll come back with a plan, not a pitch."
  }
];

/**
 * The phrase a sector should be linked with — the subject of its own title
 * tag, e.g. "Marketing for specialist contractors". Internal links use it as
 * anchor text so what points at the page agrees with what the page claims.
 */
export function anchorFor(sector: Sector): string {
  return sector.metaTitle.replace(/\s*\|\s*ADVRT\s*$/, '').trim();
}

export const bySlug = new Map(sectors.map((s) => [s.slug, s]));
