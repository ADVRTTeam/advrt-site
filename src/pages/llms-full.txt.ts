import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { sectors } from '../data/sectors';

/**
 * llms-full.txt — the prose behind llms.txt: every article in full, plus the
 * substance of each sector page. Markdown is passed through as written; the
 * few raw HTML blocks in the articles are stripped back to their text.
 */
function plain(markdown: string) {
  return markdown
    // The in-body CTA is site furniture, not article content.
    .replace(/<div class="ctarow">[\s\S]*?<\/div>\s*<\/div>/g, '')
    .replace(/<div class="ctarow">[\s\S]*?<\/div>/g, '')
    // Keep the figures from the stat rows, as a plain list.
    .replace(/<div class="stat"><b>(.*?)<\/b><span>(.*?)<\/span><\/div>/g, '- $1 — $2')
    .replace(/<\/?div[^>]*>/g, '')
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1')
    .replace(/<a class="btn"[^>]*>[\s\S]*?<\/a>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function GET({ site: base }: APIContext) {
  const origin = base!.href.replace(/\/$/, '');
  const posts = (await getCollection('insights', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const out: string[] = [
    `# ${site.name} — full text`,
    '',
    `> ${site.description}`,
    '',
    `Source: ${origin}. ${site.legalName}, registered in England and Wales.`,
    `Contact: ${site.email}, ${site.phone}.`,
    '',
    '---',
    '',
    '# Sectors',
    '',
  ];

  for (const s of sectors) {
    out.push(
      `## ${s.short}`,
      '',
      `URL: ${origin}/${s.slug}`,
      '',
      `${s.h1a} ${s.h1b}`,
      '',
      s.lede,
      '',
      `### ${s.p2a} ${s.p2b}`,
      '',
      s.pLede,
      '',
    );

    if (s.disciplines) {
      out.push(`### ${s.disciplines.head}`, '', s.disciplines.lede, '');
      for (const d of s.disciplines.items) {
        out.push(
          `- ${d.name}. Who buys it: ${d.who} What triggers it: ${d.trigger} ` +
            `How ADVRT plays it: ${d.play}`,
        );
      }
      out.push('');
    }

    out.push(`### ${s.buildHead1} ${s.buildHead2}`, '', s.buildLede, '');
    for (const t of s.tabs) {
      out.push(`#### ${t.no} · ${t.name} — ${t.head}`, '', t.body, '');
      for (const pt of t.points) out.push(`- ${pt}`);
      out.push('');
    }

    if (s.stages) {
      out.push('### How it lands', '');
      for (const st of s.stages) out.push(`- Stage ${st.no}, ${st.name}: ${st.desc}`);
      out.push('');
    }

    out.push(`### ${s.lab.head1} ${s.lab.head2}`, '', s.lab.lede, '');
    if (s.lab.kind === 'cards') {
      for (const c of s.lab.cards) out.push(`- ${c.h}: ${c.b}`);
    } else {
      for (const st of s.lab.stats) out.push(`- ${st.n} — ${st.k}`);
    }
    out.push('', `### ${s.faqHead}`, '');
    for (const f of s.faqs) out.push(`**${f.q}**`, '', f.a, '');
    out.push('---', '');
  }

  out.push('# Insights', '');

  for (const p of posts) {
    out.push(
      `## ${p.data.title}`,
      '',
      `URL: ${origin}/insights/${p.id}`,
      `Published: ${p.data.date.toISOString().slice(0, 10)} · ${p.data.mins} min read · ${p.data.topic}`,
      `Author: ${p.data.author}, ${p.data.authorRole}`,
      '',
      p.data.excerpt,
      '',
    );
    if (p.data.takeaways.length) {
      out.push('### Key takeaways', '');
      for (const t of p.data.takeaways) out.push(`- ${t}`);
      out.push('');
    }
    out.push(plain(p.body ?? ''), '', '---', '');
  }

  return new Response(out.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
