import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import { injectHead } from "#imports";
import { usePageSeo } from "~/composables/usePageSeo";

const site = "https://aminhadei.github.io/dgientco";

type HeadInput = Record<string, unknown>;

function unwrap(input: unknown): HeadInput {
  if (typeof input === "function") {
    const value: unknown = input();
    return value && typeof value === "object" ? (value as HeadInput) : {};
  }
  if (input && typeof input === "object" && "value" in input) {
    const value = (input as { value: unknown }).value;
    return value && typeof value === "object" ? (value as HeadInput) : {};
  }
  return input && typeof input === "object" ? (input as HeadInput) : {};
}

function inputs(): HeadInput[] {
  return [...injectHead().entries.values()].map((entry) => unwrap(entry.input));
}

function latest(predicate: (input: HeadInput) => boolean): HeadInput | undefined {
  return inputs().filter(predicate).at(-1);
}

function seoEntry(): { title: unknown; meta: HeadInput } | undefined {
  const entry = latest((input) => {
    return !!input._flatMeta && typeof input._flatMeta === "object";
  });
  const meta = entry?._flatMeta;
  if (!entry || !meta || typeof meta !== "object") return undefined;
  return { title: entry.title, meta: meta as HeadInput };
}

function Page(options: {
  title: string;
  description: string;
  noindex?: boolean;
  home?: boolean;
  type?: "website" | "article";
  image?: string;
}) {
  return defineComponent({
    setup() {
      usePageSeo(options);
      return () => h("h1", options.title);
    },
  });
}

describe("usePageSeo", () => {
  it("sets the title, description, canonical, and open graph tags", async () => {
    const wrapper = await mountSuspended(
      Page({ title: "درباره", description: "توضیح صفحه" }),
      { route: "/about" },
    );
    const seo = seoEntry();
    const head = latest((input) => Array.isArray(input.link));
    const links = Array.isArray(head?.link) ? head.link : [];
    const canonical = links.find((link) => {
      return (
        !!link && typeof link === "object" && "rel" in link && link.rel === "canonical"
      );
    }) as { href?: string } | undefined;

    expect(seo?.title).toBe("درباره | فنصاد");
    expect(seo?.meta.description).toBe("توضیح صفحه");
    expect(seo?.meta.ogTitle).toBe("درباره | فنصاد");
    expect(seo?.meta.ogDescription).toBe("توضیح صفحه");
    expect(seo?.meta.ogUrl).toBe(`${site}/about`);
    expect(seo?.meta.ogLocale).toBe("fa_IR");
    expect(seo?.meta.ogSiteName).toBe("فنصاد");
    expect(seo?.meta.ogType).toBe("website");
    expect(seo?.meta.ogImage).toBe(`${site}/images/og.png`);
    expect(seo?.meta.twitterCard).toBe("summary_large_image");
    expect(seo?.meta.robots).toBe("index, follow");
    expect(head?.title).toBe("درباره | فنصاد");
    expect(canonical?.href).toBe(`${site}/about`);
    wrapper.unmount();
  });

  it("omits the canonical link when the page is noindex", async () => {
    const wrapper = await mountSuspended(
      Page({ title: "صفحه پیدا نشد", description: "نیست", noindex: true }),
      { route: "/contact" },
    );
    const seo = seoEntry();
    const head = latest((input) => Array.isArray(input.link));

    expect(seo?.title).toBe("صفحه پیدا نشد | فنصاد");
    expect(head?.link).toEqual([]);
    expect(seo?.meta.robots).toBe("noindex, nofollow");
    wrapper.unmount();
  });

  it("adds organization and article structured data", async () => {
    const home = await mountSuspended(
      Page({
        title: "فنصاد",
        description: "توضیح خانه",
        home: true,
      }),
      { route: "/" },
    );
    const homeScript = scriptText();
    expect(homeScript).toContain("Organization");
    expect(homeScript).toContain("WebSite");
    expect(homeScript).toContain("فنصاد");
    expect(homeScript).toContain("فناوری‌های نوین صنعت و انرژی دانش‌گستر (سهامی خاص)");
    expect(homeScript).toContain("DGIENT");
    expect(homeScript).toContain("+982144867165");
    home.unmount();

    const article = await mountSuspended(
      Page({
        title: "خبر نمونه",
        description: "خلاصه خبر",
        type: "article",
        image: "/images/unsplash/tech-ai.webp",
      }),
      { route: "/news/new-ai-platform" },
    );
    const articleScript = scriptText();
    expect(articleScript).toContain("NewsArticle");
    expect(articleScript).toContain(`${site}/images/unsplash/tech-ai.webp`);
    article.unmount();
  });
});

function scriptText(): string {
  const head = latest((input) => Array.isArray(input.script));
  const scripts = Array.isArray(head?.script) ? head.script : [];
  return scripts
    .map((script) => {
      if (!script || typeof script !== "object" || !("innerHTML" in script)) return "";
      return typeof script.innerHTML === "string" ? script.innerHTML : "";
    })
    .join("\n");
}
