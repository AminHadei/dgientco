import { normalizeSiteUrl } from "../../app/utils/site";

export default defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(process.env.NUXT_PUBLIC_SITE_URL);
  setHeader(event, "content-type", "text/plain; charset=utf-8");
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
});
