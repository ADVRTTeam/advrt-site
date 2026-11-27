/**
 * Contrast gate for the band tokens. The day band was added after the
 * night system, so every text token has to be re-checked against a light
 * ground — orange in particular drops to 2.8:1 and cannot carry words.
 * Run: node scripts/contrast.mjs
 */
const hex = (h) => h.replace('#', '').match(/../g).map((x) => parseInt(x, 16));
const lum = (c) => {
  const [r, g, b] = hex(c).map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const DAY = '#f4f3ef', CARD = '#ffffff', ACC = '#ff5a1f';
const cases = [
  ['day  --fg',       '#1a1813', DAY, 4.5],
  ['day  --fg-2',     '#332f27', DAY, 4.5],
  ['day  --fg-3',     '#4e4a40', DAY, 4.5],
  ['day  --fg-4',     '#615d52', DAY, 4.5],
  ['day  --fg-5',     '#66625a', DAY, 4.5],
  ['day  --fg-6',     '#706c63', DAY, 4.5],
  ['card --fg-3',     '#4e4a40', CARD, 4.5],
  ['card --fg-5',     '#66625a', CARD, 4.5],
  ['day  --acc-txt',  '#b23c0c', DAY, 4.5],
  ['card --acc-txt',  '#b23c0c', CARD, 4.5],
  ['acc band --fg',    '#0b0b0c', ACC, 4.5],
  ['acc band --fg-3',  '#1e1a12', ACC, 4.5],
  ['acc band --fg-4',  '#241f16', ACC, 4.5],
  ['acc band --fg-5',  '#2b2419', ACC, 4.5],
  ['acc band --acc-txt', '#16120d', ACC, 4.5],
  ['acc band button',  '#ff5a1f', '#0b0b0c', 4.5],
];

let failed = 0;
for (const [name, fg, bg, min] of cases) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) failed++;
  console.log(`${r.toFixed(2).padStart(6)}  ${(ok ? 'pass' : 'FAIL').padEnd(5)} ${name}`);
}
console.log(failed ? `\n${failed} token(s) below AA` : '\nAll band text tokens clear AA 4.5:1.');
process.exit(failed ? 1 : 0);
