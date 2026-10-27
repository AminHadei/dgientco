import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import AppFooter from "~/components/AppFooter.vue";
import NewsCard from "~/components/NewsCard.vue";
import PageHero from "~/components/PageHero.vue";

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

describe("AppFooter", () => {
  it("does not link to news, about, startups, or membership", async () => {
    const footer = await mountSuspended(AppFooter);
    const links = footer.findAll("a").map((link) => link.attributes("href") || "");

    expect(links.some((href) => /\/news(\/|$|\?|#)/.test(href))).toBe(false);
    expect(links.some((href) => /\/about(\/|$|\?|#)/.test(href))).toBe(false);
    expect(links.some((href) => /\/startups(\/|$|\?|#)/.test(href))).toBe(false);
    expect(footer.findAll("a").some((link) => link.text().includes("عضویت"))).toBe(
      false,
    );

    const button = footer.get("button");
    expect(button.text()).toContain("عضویت");
    expect(button.attributes("type")).toBe("submit");
    expect(links).toContain("/contact");
  });
});
