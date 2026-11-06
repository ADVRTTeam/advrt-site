/**
 * Site-wide constants, taken verbatim from the design canvas.
 * Change these in one place rather than across templates.
 */

export const site = {
  name: 'ADVRT',
  tagline: 'Marketing for the built environment',
  description:
    'Specialist paid media and lead generation for surveyors, architects, contractors, compliance firms, training providers and the wider built environment.',
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
  copyright: 'ADVRT® 2026',
} as const;

/** Primary in-page nav for the home page. */
export const homeNav = [
  { id: 'sectors', label: 'Sectors', href: '/#sectors' },
  { id: 'process', label: 'Process', href: '/#process' },
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'about', label: 'About', href: '/#about' },
] as const;

/** The two sectors that live behind the nav's "More services" panel. */
export const moreServices = [
  { label: 'Architects', desc: 'Commissions that fit your portfolio', href: '/architects' },
  {
    label: 'Wider built environment',
    desc: 'Engineers, planners, consultancies, trades',
    href: '/built-environment',
  },
] as const;

/** Mobile menu for the home page. */
export const homeMenu = [
  { label: 'Sectors', href: '/#sectors', no: '03' },
  { label: 'Process', href: '/#process', no: '04' },
  { label: 'Work', href: '/#work', no: '06' },
  { label: 'About', href: '/#about', no: '07' },
  { label: 'Contact', href: '/#contact', no: '09' },
] as const;

/** Footer sector links, in canvas order. */
export const footerSectors = [
  { label: 'Surveyors', href: '/surveyors' },
  { label: 'Architects', href: '/architects' },
  { label: 'Contractors', href: '/contractors' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Training', href: '/training' },
  { label: 'Wider built environment', href: '/built-environment' },
] as const;

export const footerAgency = [
  { label: 'Process', href: '/#process' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Start a project', href: '/start-a-project' },
] as const;
