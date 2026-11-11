import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * The one definition of "this article is live".
 *
 * Two gates. `draft: true` hides a post indefinitely. A date in the future
 * hides it until that day, which is what lets a week's writing be committed
 * in one go and still appear a couple of posts at a time.
 *
 * Because the site is static, the date gate only takes effect when a build
 * runs. A post dated Wednesday appears on the first build on or after
 * Wednesday, so something has to rebuild the site on those days — the weekly
 * content run schedules that when it commits the batch.
 *
 * Dates carry no time, so they parse as midnight UTC and a post dated today
 * is live from the first build of the day.
 */
export function isLive(data: CollectionEntry<'insights'>['data'], now = new Date()): boolean {
  if (data.draft) return false;
  return data.date.valueOf() <= now.valueOf();
}

/** Every live article, newest first. */
export async function liveInsights(): Promise<CollectionEntry<'insights'>[]> {
  const now = new Date();
  return (await getCollection('insights', ({ data }) => isLive(data, now)))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
