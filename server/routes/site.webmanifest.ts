import { siteFullName, siteName, themeColor } from "../../app/utils/site";

function scopePath(): string {
  const base = process.env.NUXT_APP_BASE_URL || "/";
  if (base === "/") return "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export default defineEventHandler((event) => {
  const scope = scopePath();
  setHeader(event, "content-type", "application/manifest+json; charset=utf-8");
  return {
    name: siteFullName,
    short_name: siteName,
    lang: "fa",
    dir: "rtl",
    start_url: scope,
    scope,
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      { src: "favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
});
