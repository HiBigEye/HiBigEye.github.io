import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAll, urlOf } from '../lib/content';
import { SITE } from '../site.config';

export async function GET(context: APIContext) {
  const items = (await getAll()).filter((e) => e.collection !== 'projects');
  return rss({
    title: SITE.title,
    description: SITE.tagline,
    site: context.site!,
    items: items.map((e) => ({ title: e.data.title, pubDate: e.data.date, description: e.data.description, link: urlOf(e) })),
  });
}
