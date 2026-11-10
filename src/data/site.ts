/**
 * Site-wide constants, taken verbatim from the night-system boards.
 * The company and trade-mark detail is new in this design.
 */

export const site = {
  name: 'ADVRT',
  legalName: 'ADVRT Marketing Ltd',
  tagline: 'Marketing for the built environment',
  description:
    'The specialist growth partner for surveyors, contractors, compliance firms, training providers and the wider built environment.',
  email: 'team@advrt.co.uk',
  phone: '0800 689 3759',
  phoneHref: 'tel:+448006893759',
  address: {
    line1: 'Tagus House',
    line2: '9 Ocean Way',
    city: 'Southampton',
    postcode: 'SO14 3TJ',
    country: 'GB',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/jackadvrt/',
    facebook: 'https://www.facebook.com/advrtagency',
  },
  /* NOTE: company registration number still needed from ADVRT — see
     OUTSTANDING.md. The footer and policies both want it. */
  companyNumber: '',
  legalLine:
    '© ADVRT 2026 · ADVRT Marketing Ltd, registered in England and Wales · Registered office: Tagus House, 9 Ocean Way, Southampton, SO14 3TJ',
  trademarkLine:
    'ADVRT® is a registered UK trade mark of ADVRT Marketing Ltd. ADVRTISE™ is a proprietary brand and methodology of ADVRT Marketing Ltd.',
} as const;

/** The Sectors dropdown. `note` is the small label on the right of each row. */
export const sectorNav = [
  { label: 'Surveyors', note: 'Instructions', href: '/surveyors' },
  { label: 'Architects', note: 'Projects', href: '/architects' },
  { label: 'Contractors', note: 'Specialist trades', href: '/contractors' },
  { label: 'Compliance', note: 'Inspections', href: '/compliance' },
  { label: 'Fire protection', note: 'Contracts', href: '/fire-protection' },
  { label: 'Training', note: 'Course seats', href: '/training' },
  { label: 'Wider built environment', note: 'Specialists', href: '/built-environment' },
] as const;

/** Primary nav, left to right, beside the logo. */
export const primaryNav = [
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerCompany = [
  { label: 'Home', href: '/' },
  { label: 'Our work', href: '/#work' },
  { label: 'How we work', href: '/#process' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Start a project', href: '/start-a-project' },
] as const;

export const footerLegal = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Cookie policy', href: '/cookies' },
  { label: 'Terms of business', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Complaints', href: '/complaints' },
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
