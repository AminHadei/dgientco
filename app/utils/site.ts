export const siteName = "فنصاد";
export const siteFullName = "فناوری‌های نوین صنعت و انرژی دانش‌گستر";
export const siteLegalName = `${siteFullName} (سهامی خاص)`;
export const siteIntroName = `شرکت ${siteFullName} (${siteName})`;
export const siteAlternateName = "DGIENT";
export const siteMission =
  "ماموریت شرکت، مولدسازی دارایی‌ها و تجاری‌سازی دستاوردهای دانشگاه علوم و تحقیقات تهران است.";
export const heroTitle = "مولدسازی دارایی‌ها و تجاری‌سازی دانش";
export const newsDescription = "نمونه‌خبرهای وب‌سایت فنصاد.";

export const siteLocale = "fa_IR";
export const themeColor = "#1c1917";
export const defaultSiteUrl = "https://aminhadei.github.io/dgientco";
export const defaultDescription = siteMission;
export const defaultOgImage = "/images/og.png";
export const newsPageSize = 6;

export function normalizeSiteUrl(value: string | undefined): string {
  const raw = (value ?? "").trim();
  return (raw || defaultSiteUrl).replace(/\/+$/, "");
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
