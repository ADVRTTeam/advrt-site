/** Brief form options, verbatim from the design canvas. */

export const sectorOptions = [
  'Surveyors', 'Architects', 'Contractors', 'Compliance', 'Training', 'Wider built environment',
] as const;

export const workBySector: Record<string, string[]> = {
  Surveyors: [
    'Level 2 surveys', 'Level 3 surveys', 'Help to Buy', 'Independent valuations',
    'Probate valuations', 'Lease extensions', 'Monitoring',
  ],
  Architects: ['Private residential', 'Extensions', 'New-builds', 'Commercial', 'Framework bids'],
  Contractors: [
    'Direct client work', 'Tender invitations', 'Sub-contract packages', 'Maintenance contracts',
  ],
  Compliance: [
    'EPCs', 'EICRs', 'Gas safety certificates', 'Fire risk assessments',
    'Asbestos surveys', 'Legionella risk assessments', 'PAT testing',
  ],
  Training: [
    'Health and safety courses', 'Retrofit qualifications', 'Site cards and tests',
    'Plant and scaffolding tickets', 'Electrical and gas courses', 'Awareness and refresher training',
  ],
  'Wider built environment': ['Consultancy work', 'Planning work', 'Fit-out', 'Specialist trades', 'Not sure yet'],
};

export const sourceOptions = [
  'Referrals', 'Comparison sites', 'Organic search', 'Our own Google Ads', 'Social media', 'Not much yet',
] as const;

export const siteOptions = [
  { label: 'I like my site', sub: "Keep it. We'll add focused landing pages." },
  { label: 'It needs work', sub: "We'll build a lead-hub site around the campaigns." },
  { label: 'No site yet', sub: 'Start from a clean build.' },
] as const;

export const budgetOptions = [
  'Under £1k', '£1k to £2k', '£2k to £5k', '£5k+', 'Not sure yet',
] as const;

export const timingOptions = [
  'As soon as possible', 'In 1 to 3 months', 'Just exploring',
] as const;

export const callTimes = ['09:30', '11:00', '13:30', '15:00', '16:30'] as const;

export const stepLabels = ['Firm', 'Work', 'Today', 'Budget', 'Contact'] as const;

/** Contact page enquiry topics. */
export const contactTopics = [
  'General enquiry', 'Partnerships', 'Press', 'Existing client support', 'Something else',
] as const;
