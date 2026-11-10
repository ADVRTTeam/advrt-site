/**
 * Authors — one record per person, and the single place their photo, role
 * and bio are set.
 *
 * Every byline, author box and article JSON-LD node reads from here, so
 * changing a portrait or a job title is a one-line edit rather than a hunt
 * through the templates. `photo` is a name in the image registry
 * (src/lib/images.ts), which resolves to a real import so Astro still emits
 * optimised WebP at the sizes each context asks for. To swap a portrait,
 * drop the new file in src/assets/images/ and change the name here.
 *
 * Articles refer to an author by key in their frontmatter (`author: 'jack'`).
 * Older posts that carry a display name instead still resolve, see
 * `resolveAuthor` below.
 */

export interface Author {
  /** Frontmatter key, and the slug used if author pages are ever added. */
  key: string;
  name: string;
  /** Shown under the name in bylines and on the author box. */
  role: string;
  /** Image registry name — see src/lib/images.ts. */
  photo: string;
  /** Alt text for the portrait. Describes the person, not the article. */
  photoAlt: string;
  /** The author-box paragraph. Kept to one paragraph by design. */
  bio: string;
  /** Credentials shown as a short line on the home page panel. */
  credentials: string;
  /** Used for the Person node in article JSON-LD. */
  sameAs: string[];
}

export const authors: Author[] = [
  {
    key: 'jack',
    name: 'Jack',
    role: 'Founder, ADVRT',
    photo: 'jack-founder',
    photoAlt: 'Jack, founder of ADVRT',
    bio:
      'Lead generation specialist and Google Partner. Jack founded ADVRT and ' +
      'co-founded multiple lead generation brands across the built environment, ' +
      'proving campaigns in the field before any client budget is involved. The ' +
      'data, findings and results from those brands feed every client build.',
    credentials: 'Founder of ADVRT · Lead generation specialist · Google Partner',
    sameAs: ['https://www.linkedin.com/in/jackadvrt/'],
  },
];

export const authorByKey = Object.fromEntries(authors.map((a) => [a.key, a]));

/** The author used when frontmatter names nobody. */
export const defaultAuthor = authors[0];

/**
 * Accepts a frontmatter key ("jack") or a display name ("Jack"), so the ten
 * existing articles keep working without being rewritten.
 */
export function resolveAuthor(value?: string): Author {
  if (!value) return defaultAuthor;
  const key = value.trim().toLowerCase();
  return (
    authorByKey[key] ??
    authors.find((a) => a.name.toLowerCase() === key) ??
    defaultAuthor
  );
}
