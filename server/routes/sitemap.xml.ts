import { absoluteUrl, normalizeSiteUrl } from "../../app/utils/site";
import { publicPaths } from "../utils/publicRoutes";

export default defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(process.env.NUXT_PUBLIC_SITE_URL);
  const urls = publicPaths()
    .map((path) => `  <url><loc>${absoluteUrl(siteUrl, path)}</loc></url>`)
    .join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
});
