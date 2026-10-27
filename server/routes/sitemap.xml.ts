const SITE = "https://dgientco.com";

const paths = [
  "/",
  "/about",
  "/startups",
  "/news",
  "/news/page/2",
  "/news/new-ai-platform",
  "/news/partnership-announcement",
  "/news/innovation-award",
  "/news/cloud-expansion",
  "/news/cybersecurity-summit",
  "/news/new-office-opening",
  "/news/training-program",
  "/news/sustainability-initiative",
  "/contact",
  "/contact/visits",
  "/contact/sales",
  "/contact/press",
  "/legal-information",
  "/privacy-policy",
  "/terms",
];

export default defineEventHandler((event) => {
  const urls = paths.map((path) => `  <url><loc>${SITE}${path}</loc></url>`).join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
});
