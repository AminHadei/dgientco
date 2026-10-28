import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { siteAlternateName, siteLegalName, siteName } from "../../app/utils/site";
import {
  basePath,
  canonicalUrl,
  expectFooterShape,
  expectNoConsoleErrors,
  inside,
  mainPages,
  overlaps,
  pageUrl,
  siteUrl,
  watchConsole,
} from "./support";

test.beforeEach(({ page }) => {
  watchConsole(page);
});

async function meta(page: Page, selector: string): Promise<string | null> {
  return page.locator(selector).last().getAttribute("content");
}

for (const entry of mainPages) {
  test(`${entry.path} renders with the right metadata`, async ({ page }) => {
    const response = await page.goto(pageUrl(entry.path), { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);

    await expect(page.locator("html")).toHaveAttribute("lang", "fa");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(entry.h1);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expectFooterShape(page);

    const url = canonicalUrl(entry.path);
    const image = `${siteUrl}${entry.image || "/images/og.png"}`;
    await expect(page).toHaveTitle(entry.title);
    expect(await meta(page, 'meta[name="description"]')).toBe(entry.description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", url);
    expect(await meta(page, 'meta[property="og:title"]')).toBe(entry.title);
    expect(await meta(page, 'meta[property="og:description"]')).toBe(entry.description);
    expect(await meta(page, 'meta[property="og:url"]')).toBe(url);
    expect(await meta(page, 'meta[property="og:type"]')).toBe(
      entry.ogType || "website",
    );
    expect(await meta(page, 'meta[property="og:image"]')).toBe(image);
    expect(await meta(page, 'meta[property="og:locale"]')).toBe("fa_IR");
    expect(await meta(page, 'meta[property="og:site_name"]')).toBe(siteName);
    expect(await meta(page, 'meta[name="twitter:card"]')).toBe("summary_large_image");
    expect(await meta(page, 'meta[name="robots"]')).toBe("index, follow");

    if (entry.path === "/") {
      await expect(page.locator('header img[alt="فنصاد"]')).toBeVisible();
      await expect(page.locator("main")).not.toContainText("ماموریت شرکت");
      await expect(page.locator("main")).toContainText("پروژه‌های جاری");
      await expect(page.locator("main")).toContainText(
        "سرمایه‌گذاری در تولید هالوفایبر",
      );
      const ld = await page.locator('script[type="application/ld+json"]').textContent();
      expect(ld).toContain(siteName);
      expect(ld).toContain(siteLegalName);
      expect(ld).toContain(siteAlternateName);
      expect(ld).toContain("fansad.company@gmail.com");
      expect(ld).toContain("+982144867165");
      const stylesheet = await page
        .locator('link[rel="stylesheet"]')
        .first()
        .getAttribute("href");
      const icon = await page.locator('link[rel="icon"]').first().getAttribute("href");
      expect(stylesheet?.startsWith(`${basePath}/`)).toBe(true);
      expect(icon?.startsWith(`${basePath}/`)).toBe(true);
      const css = await page.request.get(stylesheet || "");
      expect(css.ok()).toBe(true);
      expect(await css.text()).toContain(
        "url(../fonts/vazirmatn-arabic-400-normal.woff2)",
      );
      const font = await page.request.get(
        `${basePath}/fonts/vazirmatn-arabic-400-normal.woff2`,
      );
      expect(font.ok()).toBe(true);
      const preload = await page
        .locator('link[rel="preload"][as="image"]')
        .first()
        .getAttribute("href");
      expect(preload?.startsWith(`${basePath}/`)).toBe(true);
    }

    if (entry.path === "/contact") {
      await expect(page.locator("main form")).toHaveCount(0);
      await expect(page.locator("main input, main textarea, main select")).toHaveCount(
        0,
      );
      await expect(page.locator('main a[href^="tel:"]')).toHaveCount(1);
      await expect(page.locator('main a[href^="mailto:"]')).toHaveCount(1);
      await expect(page.locator("main address")).toHaveCount(1);
      await expect(page.locator("main")).toContainText("۰۲۱-۴۴۸۶۷۱۶۵");
      await expect(page.locator("main")).toContainText("۵۰۴۴");
      await expect(page.locator("main")).toContainText("۵۰۴۵");
      await expect(page.locator("main")).toContainText("fansad.company@gmail.com");
      await expect(
        page.locator('main a[href="https://t.me/fansad_company"]'),
      ).toHaveAttribute("rel", /noopener/);
      await expect(
        page.locator('main a[href="https://ble.ir/fansad_company"]'),
      ).toHaveAttribute("target", "_blank");
    }

    if (entry.path === "/news") {
      const grid = page.locator("main .grid").first();
      const cards = grid.locator("a");
      await expect(cards).toHaveCount(6);
      const cardHeights = await cards.evaluateAll((nodes) => {
        return nodes.map((node) => node.getBoundingClientRect().height);
      });
      const shortest = Math.min(...cardHeights);
      const tallest = Math.max(...cardHeights);
      expect(tallest - shortest).toBeLessThanOrEqual(1);

      const imageBoxes = await grid.locator("img").evaluateAll((nodes) => {
        return nodes.map((node) => {
          const box = node.getBoundingClientRect();
          return { width: box.width, height: box.height };
        });
      });
      expect(imageBoxes).toHaveLength(6);
      const first = imageBoxes[0];
      expect(first).toBeDefined();
      if (first) {
        expect(first.width).toBeGreaterThan(40);
        expect(Math.abs(first.width - first.height)).toBeLessThanOrEqual(1);
        for (const box of imageBoxes) {
          expect(Math.abs(box.width - first.width)).toBeLessThanOrEqual(1);
          expect(Math.abs(box.height - first.height)).toBeLessThanOrEqual(1);
        }
      }
    }

    if (entry.path === "/news/new-ai-platform") {
      await expect(page.getByText("تماس با رسانه")).toHaveCount(0);
      await expect(page.getByText("تماس مطبوعاتی")).toHaveCount(0);
      await expect(page.locator("#press-contact, .press-contact")).toHaveCount(0);
      await expect(page.getByText("منتشر شده در")).toBeVisible();
    }

    const axe = await new AxeBuilder({ page }).analyze();
    const blocking = axe.violations.filter((violation) => {
      return violation.impact === "serious" || violation.impact === "critical";
    });
    const summary = blocking
      .map(
        (violation) => `${violation.id}: ${violation.help} (${violation.nodes.length})`,
      )
      .join("\n");
    expect(summary).toBe("");

    expectNoConsoleErrors(page);
  });
}

test("sitemap.xml and robots.txt are valid", async ({ request }) => {
  const sitemap = await request.get(pageUrl("/sitemap.xml"));
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
  expect(xml).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');

  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1] ?? "");
  const urls = xml.match(/<url>/g) ?? [];
  expect(locs.length).toBe(urls.length);
  expect(new Set(locs).size).toBe(locs.length);
  expect(locs.length).toBeGreaterThanOrEqual(mainPages.length);

  for (const entry of mainPages) {
    expect(locs).toContain(canonicalUrl(entry.path));
  }
  for (const loc of locs) {
    expect(loc.startsWith(`${siteUrl}/`)).toBe(true);
    expect(loc.includes("/dgientco/dgientco")).toBe(false);
    expect(loc.endsWith("/startups")).toBe(false);
  }

  const robots = await request.get(pageUrl("/robots.txt"));
  expect(robots.status()).toBe(200);
  const text = await robots.text();
  expect(text).toContain("User-agent: *");
  expect(text).toContain("Allow: /");
  expect(text).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
});

test("unknown routes show the 404 page", async ({ page }) => {
  const failedUrls: string[] = [];
  page.on("response", (response) => {
    if (response.status() >= 400) failedUrls.push(response.url());
  });

  const response = await page.goto(pageUrl("/missing-page-for-tests"), {
    waitUntil: "networkidle",
  });

  expect(response?.status()).toBe(404);
  await expect(page.locator("html")).toHaveAttribute("lang", "fa");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("footer")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("صفحه پیدا نشد");
  await expect(page).toHaveTitle(`صفحه پیدا نشد | ${siteName}`);

  const robots = await page.locator('meta[name="robots"]').evaluateAll((nodes) => {
    return nodes.map((node) => node.getAttribute("content") ?? "");
  });
  expect(robots.some((value) => value.includes("noindex"))).toBe(true);
  expect(failedUrls.filter((url) => url !== response?.url())).toEqual([]);
  // Chromium logs the 404 response, and Nuxt reports the missing route on app:error.
  expectNoConsoleErrors(page, [
    /^Failed to load resource: the server responded with a status of 404/,
    /^\[NUXT_E1005\]$/,
  ]);
});

test("navigation lists projects and omits startups", async ({ page }, testInfo) => {
  await page.goto(pageUrl("/"), { waitUntil: "networkidle" });
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "باز کردن منو" }).click();
  }
  const header = page.locator("header");
  await expect(header.getByRole("link", { name: "پروژه‌ها" })).toBeVisible();
  await expect(header.locator('a[href*="/startups"]')).toHaveCount(0);
  await page.goto(pageUrl("/projects"), { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("پروژه‌ها");
  await expect(page.getByRole("heading", { name: "پروژه‌های آتی" })).toBeVisible();
  expectNoConsoleErrors(page);
});

test("home hero text does not overlap", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "this test sets its own widths");

  for (const width of [375, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(pageUrl("/"), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    const hero = page.locator("section").first();
    const title = hero.locator("h1");
    const stats = hero.locator(".backdrop-blur-md").first();
    const boxes = await Promise.all(
      [hero, title, stats].map((locator) => {
        return locator.evaluate((node) => {
          const box = node.getBoundingClientRect();
          return { x: box.x, y: box.y, width: box.width, height: box.height };
        });
      }),
    );
    const [heroBox, titleBox, statsBox] = boxes;
    expect(heroBox && titleBox && statsBox).toBeTruthy();
    if (!heroBox || !titleBox || !statsBox) continue;

    expect(titleBox.height).toBeGreaterThan(0);
    expect(statsBox.height).toBeGreaterThan(0);
    expect(inside(heroBox, titleBox)).toBe(true);
    expect(inside(heroBox, statsBox)).toBe(true);
    expect(overlaps(titleBox, statsBox)).toBe(false);
    const lineTops = await title.evaluate((node) => {
      const range = document.createRange();
      return [...node.childNodes]
        .filter(
          (child) => child.nodeType === Node.TEXT_NODE && child.textContent?.trim(),
        )
        .map((child) => {
          range.selectNodeContents(child);
          return range.getBoundingClientRect().top;
        });
    });
    expect(lineTops).toHaveLength(2);
    expect(lineTops[0]).toBeLessThan(lineTops[1] ?? 0);
  }

  expectNoConsoleErrors(page);
});
