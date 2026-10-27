import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  defaultSiteUrl,
  normalizeSiteUrl,
  pageTitle,
  siteName,
} from "../../app/utils/site";

describe("normalizeSiteUrl", () => {
  it("falls back to the GitHub Pages origin", () => {
    expect(normalizeSiteUrl(undefined)).toBe(defaultSiteUrl);
    expect(normalizeSiteUrl("  ")).toBe(defaultSiteUrl);
  });

  it("trims whitespace and trailing slashes", () => {
    expect(normalizeSiteUrl(" https://example.com/ ")).toBe("https://example.com");
    expect(normalizeSiteUrl("https://example.com///")).toBe("https://example.com");
  });
});

describe("absoluteUrl", () => {
  const site = "https://aminhadei.github.io/dgientco";

  it("joins the site origin with the route path", () => {
    expect(absoluteUrl(site, "/")).toBe(`${site}/`);
    expect(absoluteUrl(site, "")).toBe(`${site}/`);
    expect(absoluteUrl(site, "/about")).toBe(`${site}/about`);
    expect(absoluteUrl(site, "about")).toBe(`${site}/about`);
    expect(absoluteUrl(site, "/about/")).toBe(`${site}/about`);
  });

  it("keeps the base path that already lives on the site origin", () => {
    expect(absoluteUrl(`${site}/`, "/news/new-ai-platform")).toBe(
      `${site}/news/new-ai-platform`,
    );
  });
});

describe("pageTitle", () => {
  it("appends the site name once", () => {
    expect(pageTitle("درباره")).toBe(`درباره | ${siteName}`);
    expect(pageTitle(" اخبار ")).toBe(`اخبار | ${siteName}`);
    expect(pageTitle(siteName)).toBe(siteName);
    expect(pageTitle(`${siteName} | بزرگترین پردیس استارت‌آپی خاورمیانه`)).toBe(
      `${siteName} | بزرگترین پردیس استارت‌آپی خاورمیانه`,
    );
    expect(pageTitle("  ")).toBe(siteName);
  });
});
