/**
 * Policy content, transcribed from the night-system policy board.
 *
 * These are the client's own draft policies and carry the board's
 * "for legal review" notice until ADVRT has them signed off.
 */

export interface PolicySection {
  heading: string;
  paras: string[];
  items: { b: string; t: string }[];
  table: { head: string[]; rows: string[][] } | null;
}

export interface Policy {
  slug: string;
  name: string;
  head1: string;
  head2: string;
  lede: string;
  updated: string;
  sections: PolicySection[];
}

export const policies: Policy[] = [
  {
    "slug": "privacy",
    "name": "Privacy policy",
    "head1": "Privacy",
    "head2": "policy.",
    "lede": "How ADVRT Marketing Ltd collects, uses and protects personal data when you use this site, enquire about a project or work with us as a client.",
    "updated": "Last updated 1 November 2026",
    "sections": [
      {
        "heading": "Who we are",
        "paras": [
          "ADVRT Marketing Ltd (“ADVRT”, “we”, “us”) is the data controller for the personal data described in this policy. Our registered office is Tagus House, 9 Ocean Way, Southampton, SO14 3TJ.",
          "For anything about this policy or your data, email team@advrt.co.uk or call 0800 689 3759."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "What we collect",
        "paras": [
          "We only ask for what we need to reply to you and to deliver work."
        ],
        "items": [
          {
            "b": "Enquiry details.",
            "t": "Your name, firm, email, phone, the sector you work in, the work you want more of, your budget range and timing, and anything else you choose to tell us in a message."
          },
          {
            "b": "Client delivery data.",
            "t": "Account access, campaign data, website analytics and lead records held on your behalf during a project."
          },
          {
            "b": "Technical data.",
            "t": "IP address, browser and device type, pages visited and referring source, collected through cookies and analytics."
          },
          {
            "b": "Correspondence.",
            "t": "Emails, call notes and meeting recordings where you have been told a call is being recorded."
          }
        ],
        "table": null
      },
      {
        "heading": "Why we use it, and our lawful basis",
        "paras": [
          "Under UK GDPR we rely on the following bases."
        ],
        "items": [
          {
            "b": "Legitimate interests.",
            "t": "Responding to an enquiry, scoping a project, running and improving our own marketing, and keeping records of work delivered."
          },
          {
            "b": "Contract.",
            "t": "Delivering a project you have engaged us for, including building sites and campaigns and handing them over."
          },
          {
            "b": "Consent.",
            "t": "Non-essential cookies and analytics, and any marketing emails you opt into. You can withdraw consent at any time."
          },
          {
            "b": "Legal obligation.",
            "t": "Accounting, tax and records we are required to keep."
          }
        ],
        "table": null
      },
      {
        "heading": "Who we share it with",
        "paras": [
          "We do not sell personal data, and we do not pass enquiry details to other agencies or to any lead marketplace.",
          "We use a small number of processors to run the business: cloud hosting and website delivery, email and calendar, our CRM and booking system, analytics and advertising platforms, and our accountants. Each is bound by contract to process data only on our instructions."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "How long we keep it",
        "paras": [
          "Enquiries that do not become projects are kept for 24 months, then deleted. Client records are kept for the duration of the engagement and for seven years afterwards where we are required to for tax and accounting purposes. Analytics data is retained according to the settings described in our cookie policy."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Your rights",
        "paras": [
          "You have the right to access the personal data we hold about you, to have it corrected or erased, to restrict or object to our processing of it, and to receive it in a portable format. To exercise any of these, email team@advrt.co.uk. We will respond within one month."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Complaints",
        "paras": [
          "If you are unhappy with how we have handled your data, tell us first and we will try to put it right. You also have the right to complain to the Information Commissioner's Office at ico.org.uk, or by calling 0303 123 1113."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Changes to this policy",
        "paras": [
          "We review this policy at least annually. The date at the top of this page shows when it was last changed. Material changes will be flagged on the site."
        ],
        "items": [],
        "table": null
      }
    ]
  },
  {
    "slug": "cookies",
    "name": "Cookie policy",
    "head1": "Cookie",
    "head2": "policy.",
    "lede": "What we store on your device, why, and how to turn the optional parts off. Essential cookies keep the site working. Everything else waits for your consent.",
    "updated": "Last updated 1 November 2026",
    "sections": [
      {
        "heading": "What cookies are",
        "paras": [
          "Cookies are small files stored by your browser. Some are needed for a site to function. Others measure how a site is used, or help advertising platforms understand which campaigns produce enquiries."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "The cookies we use",
        "paras": [
          "This is the standard set across our sites. The exact names and durations are confirmed in the consent banner on the live site."
        ],
        "items": [],
        "table": {
          "head": [
            "Category",
            "What it does",
            "Consent"
          ],
          "rows": [
            [
              "Essential",
              "Keeps the site working: page delivery, security, remembering your cookie choice.",
              "Always on"
            ],
            [
              "Analytics",
              "Counts visits and shows which pages and sources produce enquiries.",
              "Optional"
            ],
            [
              "Advertising",
              "Lets Google Ads and Meta measure which campaigns led to an enquiry, and shows relevant ads.",
              "Optional"
            ],
            [
              "Functional",
              "Remembers preferences such as a form part-completed or a chosen filter.",
              "Optional"
            ]
          ]
        }
      },
      {
        "heading": "Managing your choice",
        "paras": [
          "You can change or withdraw your consent at any time through the cookie settings link in the footer of the live site. You can also block or delete cookies in your browser settings, though blocking essential cookies may stop parts of the site working."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Third parties",
        "paras": [
          "Where optional cookies are enabled, data may be processed by Google and Meta as independent controllers under their own privacy terms. We do not enable these before consent is given."
        ],
        "items": [],
        "table": null
      }
    ]
  },
  {
    "slug": "terms",
    "name": "Terms of business",
    "head1": "Terms of",
    "head2": "business.",
    "lede": "The commercial terms that apply to ADVRT projects. Every engagement also has its own scope document, which takes precedence where the two differ.",
    "updated": "Last updated 1 November 2026",
    "sections": [
      {
        "heading": "Scope and quotations",
        "paras": [
          "Every project is scoped individually. The proposal or statement of work sets out the deliverables, timeline and price, and is the agreement between us. Nothing on this website is an offer capable of acceptance, and the figures and examples shown are illustrative."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Fees and payment",
        "paras": [
          "Fees, instalments and payment dates are set out in the project agreement. Advertising spend is paid by you directly to the advertising platform and is never included in our fees unless the agreement says otherwise. Invoices are due within the stated terms, and we may pause work on overdue accounts."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "What you own",
        "paras": [
          "On final payment, you own the website, the campaign structures built in your own advertising accounts, your tracking configuration and all lead data generated. We retain ownership of our underlying frameworks, templates and methodology, including ADVRTISE™, and the right to reuse them for other clients."
        ],
        "items": [
          {
            "b": "",
            "t": "Your site, your domain, your hosting account."
          },
          {
            "b": "",
            "t": "Your advertising accounts, in your name."
          },
          {
            "b": "",
            "t": "Your enquiry and tracking data."
          },
          {
            "b": "",
            "t": "Our frameworks and methodology remain ours."
          }
        ],
        "table": null
      },
      {
        "heading": "Your responsibilities",
        "paras": [
          "To deliver on time we need timely access to accounts, sign-off at agreed points, and accurate information about your services, pricing and coverage. You are responsible for the accuracy of claims, accreditations and prices you ask us to publish, and for handling enquiries once the system is live."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Results and expectations",
        "paras": [
          "Lead generation depends on market demand, budget, pricing, capacity and how quickly enquiries are answered, much of which sits outside our control. We do not guarantee a specific volume of enquiries or revenue unless a written guarantee forms part of your agreement, in which case its own terms apply."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Handover and ongoing support",
        "paras": [
          "Every build ends with a full-confidence handover: a walkthrough on your own accounts, documentation, and the keys. Ongoing management and optimisation is optional, priced separately, and carries no minimum term unless agreed in writing."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Confidentiality",
        "paras": [
          "Each of us will keep the other's commercially sensitive information confidential. We may reference your firm and anonymised performance figures as a case study, and will ask first before naming you."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Liability",
        "paras": [
          "Our total liability under any engagement is limited to the fees paid for that engagement. Neither party is liable for indirect or consequential loss, including lost profits. Nothing here limits liability that cannot be limited by law."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Governing law",
        "paras": [
          "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction."
        ],
        "items": [],
        "table": null
      }
    ]
  },
  {
    "slug": "accessibility",
    "name": "Accessibility",
    "head1": "Accessibility",
    "head2": "statement.",
    "lede": "We want this site, and every site we build, to be usable by as many people as possible. Here is what we hold ourselves to and how to tell us when we fall short.",
    "updated": "Last updated 1 November 2026",
    "sections": [
      {
        "heading": "Our standard",
        "paras": [
          "We design and build to WCAG 2.1 level AA as a baseline. That covers colour contrast, keyboard access, focus visibility, text sizing, alternative text and sensible heading structure."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "What we do",
        "paras": [
          "On this site and on the sites we build for clients:"
        ],
        "items": [
          {
            "b": "",
            "t": "Every interactive control is reachable and operable by keyboard, with a visible focus state."
          },
          {
            "b": "",
            "t": "Motion and animation respect the reduced-motion setting in your operating system."
          },
          {
            "b": "",
            "t": "Text can be resized to 200% without loss of content or function."
          },
          {
            "b": "",
            "t": "Forms use real labels, and errors are announced rather than shown by colour alone."
          },
          {
            "b": "",
            "t": "Images that carry meaning have alternative text."
          }
        ],
        "table": null
      },
      {
        "heading": "Known limitations",
        "paras": [
          "Some older case study images carry limited alternative text, and a small number of third-party embeds such as booking widgets are outside our direct control. We raise accessibility issues with those suppliers where we find them."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "Tell us",
        "paras": [
          "If something on this site is hard to use, email team@advrt.co.uk or call 0800 689 3759 and tell us what happened and what you were trying to do. We aim to reply the same business day and to fix genuine barriers quickly."
        ],
        "items": [],
        "table": null
      }
    ]
  },
  {
    "slug": "complaints",
    "name": "Complaints",
    "head1": "Complaints",
    "head2": "procedure.",
    "lede": "If something has gone wrong, we would rather hear it early and fix it. This is how a complaint is handled and how long each step takes.",
    "updated": "Last updated 1 November 2026",
    "sections": [
      {
        "heading": "Raise it with us first",
        "paras": [
          "Email team@advrt.co.uk with the subject line “Complaint”, or call 0800 689 3759. Tell us what happened, when, and what you would like done about it. We acknowledge every complaint within one business day."
        ],
        "items": [],
        "table": null
      },
      {
        "heading": "How we handle it",
        "paras": [
          "The complaint goes to a director, not to the person it concerns."
        ],
        "items": [
          {
            "b": "Within 1 business day.",
            "t": "Acknowledgement, with the name of the person handling it."
          },
          {
            "b": "Within 5 business days.",
            "t": "A written response setting out what we found and what we propose to do."
          },
          {
            "b": "If more time is needed.",
            "t": "We will tell you why and give a date for a full response, which will not be more than 20 business days from the complaint."
          }
        ],
        "table": null
      },
      {
        "heading": "If you are still unhappy",
        "paras": [
          "Ask for the matter to be escalated to the founder, who will review it personally. For complaints about how we have handled personal data, you may also contact the Information Commissioner's Office at ico.org.uk."
        ],
        "items": [],
        "table": null
      }
    ]
  }
];

export const bySlug = Object.fromEntries(policies.map((p) => [p.slug, p]));
