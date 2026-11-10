import type { ImageMetadata } from 'astro';

/**
 * Image registry so content data files can reference images by bare name
 * ("case-huxley") while Astro still gets a real import to optimise.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byName.set(name, mod.default);
}

/** Same lookup, but for images that may not exist (an article without a cover). */
export function imgOrNull(name: string): ImageMetadata | null {
  return byName.get(name) ?? null;
}

export function img(name: string): ImageMetadata {
  const found = byName.get(name);
  if (!found) {
    throw new Error(
      `Unknown image "${name}". Available: ${[...byName.keys()].sort().join(', ')}`,
    );
  }
  return found;
}
