import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    news: defineCollection({
      type: "page",
      source: "news/*.md",
      schema: z.object({
        date: z.string(),
        summary: z.string(),
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
    projects: defineCollection({
      type: "data",
      source: "projects/*.yml",
      schema: z.object({
        title: z.string(),
        group: z.enum(["current", "upcoming"]),
        badge: z.string(),
        position: z.number(),
      }),
    }),
  },
});
