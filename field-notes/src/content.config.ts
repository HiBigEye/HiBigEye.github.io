import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = {
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  // Explicit links to other entries, e.g. ["notes/attention-models", "essays/why-attention"]
  related: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    ...common,
    degree: z.enum(['cogsci', 'ai']),
    course: z.string(),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object(common),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    ...common,
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { notes, essays, projects };
