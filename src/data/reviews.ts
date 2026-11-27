/**
 * Real reviews, pulled from the live Google Business Profile
 * (place ChIJ5QtNuXBxdEgRyy-BnXSYl8U) and the Trustpilot profile on
 * 27 November 2026.
 *
 * RULES FOR THIS FILE — read before adding anything.
 *
 * 1. Every entry must exist on the platform named in `source`. These cards
 *    carry the Google and Trustpilot marks, which assert a verifiable
 *    third-party origin. An invented one is not a weak testimonial, it is a
 *    banned commercial practice under the DMCC Act 2024.
 * 2. `quote` may be trimmed from a longer review, but only by removing whole
 *    clauses, never by changing words, and an elision is marked with an
 *    ellipsis. The trim must not change what the reviewer meant.
 * 3. `name` is spelled as the platform shows it, so a reader can find it.
 * 4. `full` keeps the untrimmed text so the trim can always be checked.
 *
 * Aggregate at the time of pull: Google 5.0 from 44 reviews, every one
 * 5 stars. Trustpilot 5 reviews, every one 5 stars.
 */

export type ReviewSource = 'google' | 'trustpilot';

export interface Review {
  id: string;
  source: ReviewSource;
  /** Shown on the card. Trimmed from `full`; see rule 2. */
  quote: string;
  /** The review as published, for checking the trim. */
  full: string;
  name: string;
  /** Company or role, where the reviewer states it. Omitted otherwise. */
  of?: string;
  date: string;
  rating: 5;
}

export const reviews: Review[] = [
  {
    id: 'nicholas-z',
    source: 'trustpilot',
    quote:
      'The ads have been running for over a month now and have been profitable for our business, so their approach definitely works!',
    full:
      'Working with Jack and the team has been great. They did as they said they would, and they were available to answer questions whenever needed. Upon completion of the work, we arranged a smooth handover meeting. The ads have been running for over a month now and have been profitable for our business, so their approach definitely works!',
    name: 'Nicholas',
    of: 'Nicholas Surveyors',
    date: '2026-11-19',
    rating: 5,
  },
  {
    id: 'ben-smith',
    source: 'google',
    quote:
      'Previously had some bad experiences with PPC agencies… ADVRT consistently produce higher converting ads / lower CPL than other agencies we’ve used.',
    full:
      'Previously had some bad experiences with PPC agencies (most seem to get complacent). In contrast I’ve had a great experience with ADVRT, Jack especially. Very knowledgeable and seem to consistently produce higher converting ads / lower CPL than over agencies we’ve used',
    name: 'Ben Smith',
    date: '2023-11-23',
    rating: 5,
  },
  {
    id: 'steve-cross',
    source: 'google',
    quote:
      'They helped us with some specialist lead generation tracking issues — showing they can be flexible and technically competent, not just creative.',
    full:
      'We’ve referred many of our clients to ADVRT, who are experts in their field, and have received great feedback. ADVRT have also helped us with some specialist lead generation tracking issues - showing they can be flexible and technically competent, not just creative.',
    name: 'Steve Cross',
    date: '2025-03-26',
    rating: 5,
  },
  {
    id: 'tim-martin',
    source: 'google',
    quote: 'Jack and the team have been amazing and transformed the way we generate leads.',
    full: 'Jack and the team have been amazing and transformed the way we generate leads. Highly recommend',
    name: 'Tim Martin',
    date: '2025-03-26',
    rating: 5,
  },
  {
    id: 'owen-gartside',
    source: 'google',
    quote:
      'The most important thing — they deliver results. I’m seeing a huge increase in engagement, leads and clients.',
    full:
      'Jack and the team at Advrt are brilliant at what they do. From day 1 they were able to work out what my business was and what it needed for an effective marketing strategy. Not a straightforward task! Comms are always spot on and the ideas keep coming as the campaigns are adapted and refreshed regularly. But the most important thing - they deliver results. I’m seeing a huge increase in engagement, leads and clients. Give them a shout to see how they can help your business, I couldn’t recommend them highly enough!',
    name: 'Owen Gartside',
    date: '2024-11-12',
    rating: 5,
  },
  {
    id: 'stuart-carey',
    source: 'google',
    quote:
      'Really appreciate the honesty, as you never know where you stand with so many different companies offering similar services.',
    full:
      'Exemplary service from this company. From the initial layout of what needs to be done to completion of my adverts on social networking sites I’m finally getting noticed online. Jack is a legend. Really appreciate the honesty as you never know where you stand with so many different companies offering similar services. If you want the job done for a fair price at an outstanding level look no further than these guys. See you on the next one jack!',
    name: 'Stuart Carey',
    date: '2025-04-04',
    rating: 5,
  },
  {
    id: 'tim-appleton',
    source: 'trustpilot',
    quote:
      'ADVRT have helped us scale our company by providing us with consistently effective Google ads.',
    full:
      'ADVRT have helped us scale our company by providing us with consistently effective google ads. Very friendly staff and they tend to our business as if it was their own. Highly recommended for any business!',
    name: 'Tim Appleton',
    date: '2022-01-06',
    rating: 5,
  },
  {
    id: 'adam-smith',
    source: 'google',
    quote:
      'The team consistently delivered on their promises and the return on investment was evident.',
    full:
      'I recently had the pleasure of working with ADVRT and I can honestly say, they exceeded expectations. As a customer focused business seeking to enhance our brand presence, I was impressed by the comprehensive and strategic approach taken by ADVRT. From the outset, their team displayed creativity and innovation. The campaigns they crafted were not just visually stunning but demonstrated a real understanding of our target audience. One of the standout features of ADVRT is their commitment to results. The team consistently delivered on their promises and the return on investment was evident.',
    name: 'Adam Smith',
    date: '2023-11-26',
    rating: 5,
  },
  {
    id: 'kyle-wilks',
    source: 'trustpilot',
    quote:
      'Three years… starting with social media management, moving on to social PPC and now a series of Google ad campaigns. Great results across all platforms.',
    full:
      'We have been working with ADRVT for over three years now on multiple projects. Starting out with social media management, moving on to social PPC campaigns and now we are working with Jack and the team to develop a series of Google ad campaigns. We have seen great results across all platforms and we are looking forward to many more years of success working with ADVRT.',
    name: 'Kyle Wilks',
    date: '2022-01-09',
    rating: 5,
  },
];

export const byId = (id: string): Review => {
  const r = reviews.find((x) => x.id === id);
  if (!r) throw new Error(`Unknown review "${id}". Have: ${reviews.map((x) => x.id).join(', ')}`);
  return r;
};

/** Profile totals as pulled. Date-stamped because they move. */
export const reviewTotals = {
  google: { rating: 5.0, count: 44, url: 'https://g.page/r/CcsvgZ10mJfFEBM/review' },
  trustpilot: { rating: 5.0, count: 5, url: 'https://uk.trustpilot.com/review/advrt.co.uk' },
  pulledOn: '2026-11-27',
} as const;
