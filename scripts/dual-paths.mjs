/**
 * Writes a directory-index copy of every page beside its file-style one.
 *
 * The site moved from directory output (/surveyors/) to file output
 * (/surveyors). Browsers that saw the old build cached its permanent redirect
 * from the bare path to the slashed one, and a 301 with no Cache-Control is
 * cached heuristically — often indefinitely. Netlify normalises the trailing
 * slash before custom redirect rules run, so a `status = 200` rewrite cannot
 * stop it redirecting back, and the two bounce off each other.
 *
 * With both /surveyors.html and /surveyors/index.html present, each form is an
 * exact asset match and neither redirects. The canonical tag, the sitemap and
 * every link on the site still use the bare form, so there is one indexable
 * URL per page.
 *
 * Runs after `astro build`; see the build script in package.json.
 */
import { readdirSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SKIP = new Set(['404.html', 'index.html']);

let made = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      if (entry === '_assets' || entry === 'fonts') continue;
      walk(path);
      continue;
    }
    if (!entry.endsWith('.html') || SKIP.has(entry)) continue;
    const base = entry.replace(/\.html$/, '');
    const target = join(dir, base);
    mkdirSync(target, { recursive: true });
    copyFileSync(path, join(target, 'index.html'));
    made += 1;
  }
}

walk(DIST);
console.log(`dual-paths: ${made} page(s) also written as <path>/index.html`);
