import { describe, expect, it } from "vitest";
import { newsSlugs, publicPaths } from "../../server/utils/publicRoutes";

const articleSlugs = [
  "cloud-expansion",
  "cybersecurity-summit",
  "innovation-award",
  "new-ai-platform",
  "new-office-opening",
  "partnership-announcement",
  "sustainability-initiative",
  "training-program",
];

describe("publicPaths", () => {
  it("lists the static pages, news pagination, and article slugs", () => {
    expect(newsSlugs()).toEqual(articleSlugs);

    const paths = publicPaths();
    expect(paths).toEqual([
      "/",
      "/about",
      "/startups",
      "/news",
      "/news/page/2",
      ...articleSlugs.map((slug) => `/news/${slug}`),
      "/contact",
      "/legal-information",
      "/privacy-policy",
      "/terms",
    ]);
    expect(paths).not.toContain("/news/page/3");
  });
});
