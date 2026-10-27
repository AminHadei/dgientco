import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    news: defineCollection({
      type: "page",
      source: "news/*.md",
      schema: z.object({
        date: z.string(),
        excerpt: z.string(),
        image: z.string(),
      }),
    }),
    legal: defineCollection({
      type: "page",
      source: "legal/*.md",
      schema: z.object({
        lastUpdated: z.string(),
      }),
    }),
  },
});
