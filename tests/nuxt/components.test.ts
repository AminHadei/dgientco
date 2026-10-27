import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import NewsCard from "~/components/NewsCard.vue";
import PageHero from "~/components/PageHero.vue";
import { siteFullName, siteName } from "~/utils/site";

const article = {
  slug: "new-ai-platform",
  title: "رونمایی از پلتفرم هوش مصنوعی جدید",
  excerpt: "خلاصه خبر",
  image: "/images/unsplash/tech-ai.webp",
  date: "2024-10-20",
};

describe("PageHero", () => {
  it("renders the title and optional subtitle", async () => {
    const hero = await mountSuspended(PageHero, {
      props: { title: "تماس", subtitle: "چطور می‌توانیم کمک کنیم؟" },
    });

    expect(hero.get("h1").text()).toBe("تماس");
    expect(hero.text()).toContain("چطور می‌توانیم کمک کنیم؟");
  });
});

describe("NewsCard", () => {
  it("links to the article and shows a Jalali date", async () => {
    const card = await mountSuspended(NewsCard, { props: { article } });

    expect(card.get("a").attributes("href")).toContain("/news/new-ai-platform");
    expect(card.get("h3").text()).toBe(article.title);
    expect(card.text()).toContain("۲۹ مهر ۱۴۰۳");
    expect(card.text()).toContain("خلاصه خبر");

    const image = card.get("img");
    expect(image.attributes("alt")).toBe(article.title);
    expect(image.attributes("width")).toBe("800");
    expect(image.attributes("height")).toBe("534");
    expect(image.attributes("loading")).toBe("lazy");
  });

  it("loads the image eagerly when asked", async () => {
    const card = await mountSuspended(NewsCard, {
      props: { article, eager: true },
    });

    expect(card.get("img").attributes("loading")).toBe("eager");
    expect(card.get("img").attributes("fetchpriority")).toBe("high");
  });
});

describe("AppHeader", () => {
  it("links to projects and names the logo", async () => {
    const header = await mountSuspended(AppHeader);
    const links = header.findAll("a").map((link) => link.attributes("href") || "");

    expect(header.text()).toContain("پروژه‌ها");
    expect(links.some((href) => href.includes("/projects"))).toBe(true);
    expect(links.some((href) => href.includes("/startups"))).toBe(false);
    expect(header.get("img").attributes("alt")).toBe(siteName);
  });
});

describe("AppFooter", () => {
  it("shows the full logo and contact details without a newsletter", async () => {
    const footer = await mountSuspended(AppFooter);
    const links = footer.findAll("a").map((link) => link.attributes("href") || "");

    expect(links.some((href) => /\/news(\/|$|\?|#)/.test(href))).toBe(false);
    expect(links.some((href) => /\/about(\/|$|\?|#)/.test(href))).toBe(false);
    expect(links.some((href) => /\/startups(\/|$|\?|#)/.test(href))).toBe(false);
    expect(links.some((href) => /\/projects(\/|$|\?|#)/.test(href))).toBe(false);
    expect(footer.find("form").exists()).toBe(false);
    expect(footer.find("button").exists()).toBe(false);
    expect(footer.text()).not.toContain("عضویت");
    expect(footer.text()).toContain("۰۲۱-۴۴۸۶۷۱۶۵");
    expect(footer.text()).toContain("fansad.company@gmail.com");
    expect(footer.get("img").attributes("alt")).toBe(siteFullName);
    expect(footer.get("img").attributes("src")).toContain("logo-full");
    expect(links).toContain("/contact");
    expect(links).toContain("https://t.me/fansad_company");
    expect(links).toContain("https://ble.ir/fansad_company");
  });
});
