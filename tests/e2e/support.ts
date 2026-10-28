import { expect, type Page } from "@playwright/test";
import {
  heroTitle,
  newsDescription,
  siteMission,
  siteName,
} from "../../app/utils/site";

export const siteUrl = (
  process.env.NUXT_PUBLIC_SITE_URL || "https://aminhadei.github.io/dgientco"
).replace(/\/+$/, "");

const rawBase = process.env.NUXT_APP_BASE_URL || "/dgientco/";
export const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

export function pageUrl(path: string): string {
  if (path === "/") return `${basePath}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function canonicalUrl(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

export type PageCase = {
  path: string;
  h1: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  image?: string;
};

export const mainPages: PageCase[] = [
  {
    path: "/",
    h1: heroTitle,
    title: `خانه | ${siteName}`,
    description: siteMission,
  },
  {
    path: "/about",
    h1: "درباره",
    title: `درباره | ${siteName}`,
    description: `ماموریت، مدیران و شرکای ${siteName}.`,
  },
  {
    path: "/news",
    h1: "اخبار",
    title: `اخبار | ${siteName}`,
    description: newsDescription,
  },
  {
    path: "/news/page/2",
    h1: "اخبار",
    title: `اخبار - صفحه 2 | ${siteName}`,
    description: newsDescription,
  },
  {
    path: "/news/new-ai-platform",
    h1: "نمونه خبر درباره نوآوری",
    title: `نمونه خبر درباره نوآوری | ${siteName}`,
    description: "این متن نمونه است و خبر فنصاد نیست.",
    ogType: "article",
    image: "/images/unsplash/tech-ai.webp",
  },
  {
    path: "/projects",
    h1: "پروژه‌ها",
    title: `پروژه‌ها | ${siteName}`,
    description: `پروژه‌های جاری و آتی ${siteName}.`,
  },
  {
    path: "/contact",
    h1: "تماس",
    title: `تماس | ${siteName}`,
    description: `نشانی، تلفن و ایمیل ${siteName}.`,
  },
  {
    path: "/legal-information",
    h1: "اطلاعات قانونی",
    title: `اطلاعات قانونی | ${siteName}`,
    description: `اطلاعات قانونی ${siteName}.`,
  },
  {
    path: "/privacy-policy",
    h1: "حریم خصوصی",
    title: `حریم خصوصی | ${siteName}`,
    description: `سیاست حریم خصوصی ${siteName}.`,
  },
  {
    path: "/terms",
    h1: "شرایط استفاده",
    title: `شرایط استفاده | ${siteName}`,
    description: `شرایط استفاده از وب‌سایت ${siteName}.`,
  },
];

const consoleErrors = new WeakMap<Page, string[]>();

export function watchConsole(page: Page) {
  const errors: string[] = [];
  consoleErrors.set(page, errors);
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });
}

export function expectNoConsoleErrors(page: Page, allowed: RegExp[] = []) {
  const errors = (consoleErrors.get(page) ?? []).filter((message) => {
    return !allowed.some((pattern) => pattern.test(message));
  });
  expect(errors).toEqual([]);
}

export async function expectFooterShape(page: Page) {
  const links = await page.locator("footer a").evaluateAll((anchors) => {
    return anchors.map((anchor) => anchor.getAttribute("href") ?? "");
  });

  for (const href of links) {
    const path = href.replace(/^https?:\/\/[^/]+/, "");
    expect(path).not.toMatch(/\/news(\/|$|\?|#)/);
    expect(path).not.toMatch(/\/about(\/|$|\?|#)/);
    expect(path).not.toMatch(/\/startups(\/|$|\?|#)/);
    expect(path).not.toMatch(/\/projects(\/|$|\?|#)/);
  }

  await expect(page.locator("footer form, footer #newsletter-email")).toHaveCount(0);
  await expect(page.locator("a", { hasText: "عضویت" })).toHaveCount(0);
  await expect(
    page.locator('footer img[alt="فناوری‌های نوین صنعت و انرژی دانش‌گستر"]'),
  ).toBeVisible();
  await expect(page.locator("footer")).toContainText("۰۲۱-۴۴۸۶۷۱۶۵");
  await expect(page.locator("footer")).toContainText("fansad.company@gmail.com");
  await expect(page.locator("footer")).toContainText("تهران، انتهای ستاری");
  await expect(page.locator("footer")).toContainText("(سهامی خاص)");
  const telegram = page.locator('footer a[href="https://t.me/fansad_company"]');
  await expect(telegram).toHaveAttribute("target", "_blank");
  await expect(telegram).toHaveAttribute("rel", /noopener/);
  const bale = page.locator('footer a[href="https://ble.ir/fansad_company"]');
  await expect(bale).toHaveAttribute("target", "_blank");
  await expect(bale).toHaveAttribute("rel", /noopener/);
}

type Box = { x: number; y: number; width: number; height: number };

export function overlaps(a: Box, b: Box): boolean {
  const width = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
  const height = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
  return width > 0.5 && height > 0.5;
}

export function inside(outer: Box, inner: Box): boolean {
  return (
    inner.x >= outer.x - 1 &&
    inner.y >= outer.y - 1 &&
    inner.x + inner.width <= outer.x + outer.width + 1 &&
    inner.y + inner.height <= outer.y + outer.height + 1
  );
}
