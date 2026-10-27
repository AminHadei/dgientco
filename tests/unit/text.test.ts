import { describe, expect, it } from "vitest";
import { asText, toNewsCard } from "../../app/utils/text";

describe("asText", () => {
  it("returns strings and drops other values", () => {
    expect(asText("خلاصه")).toBe("خلاصه");
    expect(asText(12)).toBeUndefined();
    expect(asText(null)).toBeUndefined();
    expect(asText(undefined)).toBeUndefined();
  });
});

describe("toNewsCard", () => {
  it("maps a content article onto card fields", () => {
    expect(
      toNewsCard({
        path: "/news/new-ai-platform",
        title: "عنوان",
        summary: "خلاصه",
        image: "/images/unsplash/tech-ai.webp",
        date: "2024-10-20",
      }),
    ).toEqual({
      slug: "new-ai-platform",
      title: "عنوان",
      excerpt: "خلاصه",
      image: "/images/unsplash/tech-ai.webp",
      date: "2024-10-20",
    });
  });

  it("drops non-text summary, image, and date values", () => {
    expect(
      toNewsCard({
        path: "/news/example",
        summary: { text: "no" },
        image: 4,
        date: 4,
      }),
    ).toEqual({
      slug: "example",
      title: "",
      excerpt: undefined,
      image: undefined,
      date: undefined,
    });
  });
});
