import { readdirSync } from "node:fs";
import { join } from "node:path";
import { newsPageSize } from "../../app/utils/site";

export function newsSlugs(root = process.cwd()): string[] {
  return readdirSync(join(root, "content/news"))
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.slice(0, -3))
    .sort();
}

export function publicPaths(root = process.cwd()): string[] {
  const slugs = newsSlugs(root);
  const pageCount = Math.ceil(slugs.length / newsPageSize);
  const newsPages = Array.from({ length: Math.max(pageCount - 1, 0) }, (_, index) => {
    return `/news/page/${index + 2}`;
  });

  return [
    "/",
    "/about",
    "/startups",
    "/news",
    ...newsPages,
    ...slugs.map((slug) => `/news/${slug}`),
    "/contact",
    "/legal-information",
    "/privacy-policy",
    "/terms",
  ];
}
