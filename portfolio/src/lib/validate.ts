import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  body: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(), // honeypot
});
export const loginSchema = z.object({ email: z.string().email(), password: z.string().min(1).max(200) });
export const projectSchema = z.object({
  title: z.string().trim().min(2).max(120),
  slug: z.string().trim().regex(/^[a-z0-9-]+$/).max(80),
  summary: z.string().trim().min(10).max(500),
  stack: z.array(z.string().max(30)).max(15),
  liveUrl: z.string().url().nullable().optional(),
  repoUrl: z.string().url().nullable().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  sortOrder: z.number().int().default(0),
});
