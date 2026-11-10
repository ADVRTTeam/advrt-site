/**
 * Writes every page at both URL forms: /surveyors and /surveyors/.
 *
 * The site moved from directory output (/surveyors/) to file output
 * (/surveyors). Browsers that saw the old build cached its permanent redirect
 * from the bare path to the slashed one, and a 301 with no Cache-Control is
 * cached heuristically — often indefinitely. Netlify then answers the slashed
 * form with a 301 back to the bare one, and the two bounce off each other
 * until the browser gives up with "this page can't be found".
 *
 * Netlify's own trailing-slash canonicalisation runs ahead of custom redirect
 * rules, so a `status = 200` rewrite can't stop it; it is switched off in
 * netlify.toml (`pretty_urls = false`). With it off, nothing adds or strips a
 * slash for us, so both forms have to be real files — which is what this does,
 * in both directions:
 *
 *   dist/surveyors.html        ->  also dist/surveyors/index.html
 *   dist/insights/index.html   ->  also dist/insights.html
 *
 * The canonical tag, the sitemap and every internal link still use the bare
 * form, so there is one indexable URL per page.
 *
 * Runs after `astro build`; see the build script in package.json.
 */
import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
/** Not pages: 404 is served by status code, and the root index has no pair. */
const SKIP_FILES = new Set(['404.html']);
const SKIP_DIRS = new Set(['_assets', 'fonts']);

let made = 0;

function copyOnce(from, to) {
  if (existsSync(to)) return;
  copyFileSync(from, to);
  made += 1;
}

function walk(dir, depth) {
  // Snapshotted before we add anything, so the files we write are not re-read.
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);

    if (statSync(path).isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      walk(path, depth + 1);
      continue;
    }
    if (!entry.endsWith('.html') || SKIP_FILES.has(entry)) continue;

    if (entry === 'index.html') {
      // A directory index: give it the bare-path twin. The root index is the
      // site itself and has no bare form.
      if (depth === 0) continue;
      copyOnce(path, `${dir}.html`);
      continue;
    }

    // A file-style page: give it the slashed twin.
    const target = join(dir, entry.replace(/\.html$/, ''));
    mkdirSync(target, { recursive: true });
    copyOnce(path, join(target, 'index.html'));
  }
}

walk(DIST, 0);
console.log(`dual-paths: ${made} page(s) written at their second URL form`);
