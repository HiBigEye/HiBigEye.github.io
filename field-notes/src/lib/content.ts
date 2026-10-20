import { getCollection, type CollectionEntry } from 'astro:content';

export type Kind = 'notes' | 'essays' | 'projects';
export type Entry = CollectionEntry<'notes'> | CollectionEntry<'essays'> | CollectionEntry<'projects'>;

export const DEGREES = {
  cogsci: 'Cognitive Science',
  ai: 'AI & Data Analytics',
} as const;
export type Degree = keyof typeof DEGREES;

export const KIND_LABEL: Record<Kind, string> = {
  notes: 'Note',
  essays: 'Essay',
  projects: 'Project',
};

export const keyOf = (e: Entry) => `${e.collection}/${e.id}`;
export const urlOf = (e: Entry) => `/${e.collection}/${e.id}/`;
export const slugTag = (t: string) => t.toLowerCase().replace(/\s+/g, '-');
export const slugCourse = (c: string) =>
  c.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const courseUrl = (deg: Degree, c: string) => `/notes/${deg}/${slugCourse(c)}/`;

const byDate = (a: Entry, b: Entry) => b.data.date.valueOf() - a.data.date.valueOf();
const live = (e: Entry) => import.meta.env.DEV || !e.data.draft;

export async function getKind<K extends Kind>(kind: K) {
  return ((await getCollection(kind)) as Entry[]).filter(live).sort(byDate) as CollectionEntry<K>[];
}

/** Courses of each degree (sorted), with their notes. */
export async function coursesByDegree() {
  const notes = await getKind('notes');
  return (Object.keys(DEGREES) as Degree[]).map((deg) => {
    const mine = notes.filter((n) => n.data.degree === deg);
    const courses = [...new Set(mine.map((n) => n.data.course))].sort();
    return { deg, courses: courses.map((c) => ({ c, items: mine.filter((n) => n.data.course === c) })) };
  });
}

export async function getAll(): Promise<Entry[]> {
  const [n, e, p] = await Promise.all([getKind('notes'), getKind('essays'), getKind('projects')]);
  return [...n, ...e, ...p].sort(byDate);
}

/** Links out, links in (backlinks), and entries sharing tags. */
export async function connectionsOf(entry: Entry) {
  const all = await getAll();
  const me = keyOf(entry);
  const map = new Map(all.map((e) => [keyOf(e), e]));

  const outgoing = entry.data.related.map((k) => map.get(k)).filter(Boolean) as Entry[];
  const incoming = all.filter((e) => keyOf(e) !== me && e.data.related.includes(me));
  const linked = new Set([...outgoing, ...incoming].map(keyOf));

  const tags = new Set(entry.data.tags);
  const shared = all
    .filter((e) => keyOf(e) !== me && !linked.has(keyOf(e)))
    .map((e) => ({ e, n: e.data.tags.filter((t) => tags.has(t)).length }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n)
    .slice(0, 4)
    .map((x) => x.e);

  return { outgoing, incoming, shared };
}

export async function allTags() {
  const counts = new Map<string, number>();
  for (const e of await getAll()) for (const t of e.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
