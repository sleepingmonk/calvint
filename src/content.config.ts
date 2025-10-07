// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  // Type-check frontmatter using a schema
	schema: z.object({
    layout: z.string(),
    scheme: z.string(),
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
    teaserImage: z.string().optional(),
		tag: z.string().optional(),
	}),

  loader: glob({ pattern: "**/*.md", base: "./src/pages/blog" })
});

const portfolio = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		layout: z.string(),
		scheme: z.string(),
		title: z.string(),
		description: z.string(),
		pubDate: z
			.string().date(),
		updatedDate: z
			.string().date(),
		heroImage: z.string().optional(),
		teaserImage: z.string().optional(),
		bgColor: z.string().optional(),
	}),

	loader: glob({ pattern: "**/*.md", base: "./src/pages/portfolio" })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, portfolio };
