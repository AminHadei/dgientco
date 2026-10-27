import { expect, type Page } from "@playwright/test";

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
    h1: "بزرگترین پردیس استارت‌آپی خاورمیانه",
    title: "دجینت‌کو | بزرگترین پردیس استارت‌آپی خاورمیانه",
    description:
      "بزرگترین پردیس استارت‌آپی خاورمیانه. از ایده تا مقیاس‌پذیری در کنار دجینت‌کو.",
  },
  {
    path: "/about",
    h1: "درباره",
    title: "درباره | دجینت‌کو",
    description:
      "داستان دجینت‌کو، از یک بنای تاریخی تا بزرگترین پردیس استارت‌آپی خاورمیانه.",
  },
  {
    path: "/news",
    h1: "اخبار",
    title: "اخبار | دجینت‌کو",
    description: "آخرین اخبار، رویدادها و داستان‌های موفقیت دجینت‌کو.",
  },
  {
    path: "/news/page/2",
    h1: "اخبار",
    title: "اخبار - صفحه 2 | دجینت‌کو",
    description: "آخرین اخبار، رویدادها و داستان‌های موفقیت دجینت‌کو.",
  },
  {
    path: "/news/new-ai-platform",
    h1: "رونمایی از پلتفرم هوش مصنوعی جدید",
    title: "رونمایی از پلتفرم هوش مصنوعی جدید | دجینت‌کو",
    description:
      "دجینت‌کو با معرفی پلتفرم هوش مصنوعی خود، گامی بزرگ در راستای نوآوری برداشت",
    ogType: "article",
    image: "/images/unsplash/tech-ai.webp",
  },
  {
    path: "/startups",
    h1: "استارت‌آپ‌ها",
    title: "استارت‌آپ‌ها | دجینت‌کو",
    description:
      "آشنایی با استارت‌آپ‌های ساخته‌شده در دجینت‌کو و شبکه سرمایه‌گذاران پردیس.",
  },
  {
    path: "/contact",
    h1: "تماس",
    title: "تماس | دجینت‌کو",
    description: "تلفن، ایمیل و نشانی دفتر دجینت‌کو.",
  },
  {
    path: "/legal-information",
    h1: "اطلاعات قانونی",
    title: "اطلاعات قانونی | دجینت‌کو",
    description: "اطلاعات قانونی دجینت‌کو.",
  },
  {
    path: "/privacy-policy",
    h1: "حریم خصوصی",
    title: "حریم خصوصی | دجینت‌کو",
    description: "سیاست حریم خصوصی دجینت‌کو.",
  },
  {
    path: "/terms",
    h1: "شرایط استفاده",
    title: "شرایط استفاده | دجینت‌کو",
    description: "شرایط استفاده از وب‌سایت دجینت‌کو.",
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
  }

  await expect(page.locator("a", { hasText: "عضویت" })).toHaveCount(0);
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
