/**
 * Builds public/og-default.png from the live hero.
 *
 * The share card is a screenshot of the real page rather than a separate
 * design, so it can never drift from the site. Run it against a preview
 * server after a build:
 *
 *   npm run build && npm run preview &
 *   node scripts/og-image.mjs
 *
 * The booking line is left out on purpose: it names a quarter, and a static
 * image would keep claiming that quarter long after it had passed.
 */
import { createRequire } from 'node:module';
import { statSync } from 'node:fs';
import sharp from 'sharp';

/**
 * Playwright is deliberately not a dependency of this project — it would add
 * a few hundred megabytes to every install for one maintenance script. Use
 * whichever copy is on the machine, and say so plainly if there isn't one.
 */
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error(
    'This script needs Playwright. Install it just for this run:\n' +
    '  npm i --no-save playwright && npx playwright install chromium',
  );
  process.exit(1);
}

const ORIGIN = process.env.OG_ORIGIN ?? 'http://localhost:4321';
const OUT = 'public/og-default.png';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});

await page.goto(ORIGIN + '/', { waitUntil: 'load' });

// Lift the brand mark out of the nav before the chrome is hidden.
await page.evaluate(() => {
  const src = document.querySelector('.pillnav a img')?.currentSrc;
  if (!src) return;
  const mark = document.createElement('img');
  mark.src = src;
  mark.alt = '';
  mark.style.cssText =
    'position:fixed;top:44px;left:56px;height:26px;width:auto;z-index:99';
  document.body.appendChild(mark);
});

await page.addStyleTag({
  content: `
    .pillnav, .cue, .skip, .consent, .hero .st1 { display: none !important; }
    /* Keep the skyline out of frame: this card is headline and action only. */
    .hero { min-height: 630px !important; padding: 150px 40px 460px !important; }
    #hero-h1 { font-size: 88px !important; max-width: 980px !important; margin-top: 0 !important; }
    .hero .lede { font-size: 19px !important; max-width: 620px !important; margin-top: 26px !important; }
    .hero-cta { margin-top: 32px !important; }
  `,
});

// Let the entrance animations settle.
await page.waitForTimeout(3000);

const shot = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

await sharp(shot)
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9, palette: true, quality: 92 })
  .toFile(OUT);

console.log(`${OUT} written — 1200x630, ${Math.round(statSync(OUT).size / 1024)} KB`);
