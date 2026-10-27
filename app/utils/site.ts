export const siteName = "دجینت‌کو";
export const siteLocale = "fa_IR";
export const themeColor = "#1c1917";
export const defaultSiteUrl = "https://aminhadei.github.io/dgientco";
export const defaultDescription =
  "دجینت‌کو به بیش از ۱۰۰۰ استارت‌آپ دسترسی به اکوسیستم، شرکا و سرمایه‌گذاران می‌دهد.";
export const defaultOgImage = "/images/og.png";
export const newsPageSize = 6;

export function normalizeSiteUrl(value: string | undefined): string {
  const raw = (value || defaultSiteUrl).trim();
  return raw.replace(/\/+$/, "");
}

export function absoluteUrl(siteUrl: string, path: string): string {
  const origin = normalizeSiteUrl(siteUrl);
  if (!path || path === "/") return `${origin}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const clean = normalized.replace(/\/+$/, "");
  return `${origin}${clean}`;
}

export function pageTitle(title: string): string {
  const trimmed = title.trim();
  if (!trimmed || trimmed.includes(siteName)) return trimmed || siteName;
  return `${trimmed} | ${siteName}`;
}
