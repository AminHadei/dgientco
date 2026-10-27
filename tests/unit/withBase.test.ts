import { describe, expect, it } from "vitest";
import { withBase } from "../../app/utils/withBase";

describe("withBase", () => {
  it("leaves root-absolute paths alone when the app is served at /", () => {
    expect(withBase("/", "/fonts/vazirmatn.woff2")).toBe("/fonts/vazirmatn.woff2");
  });

  it("prefixes app paths with the GitHub Pages base", () => {
    expect(withBase("/dgientco/", "/fonts/vazirmatn.woff2")).toBe(
      "/dgientco/fonts/vazirmatn.woff2",
    );
    expect(withBase("/dgientco/", "images/og.png")).toBe("/dgientco/images/og.png");
  });

  it("does not prefix a path that already includes the base", () => {
    expect(withBase("/dgientco/", "/dgientco/favicon.svg")).toBe(
      "/dgientco/favicon.svg",
    );
    expect(withBase("/dgientco/", "/dgientco")).toBe("/dgientco");
  });

  it("leaves absolute and protocol-relative URLs unchanged", () => {
    expect(withBase("/dgientco/", "https://example.com/a.png")).toBe(
      "https://example.com/a.png",
    );
    expect(withBase("/dgientco/", "//cdn.example.com/a.png")).toBe(
      "//cdn.example.com/a.png",
    );
  });
});
