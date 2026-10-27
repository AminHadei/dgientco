import { describe, expect, it } from "vitest";
import { sizeOf } from "../../app/utils/images";

describe("sizeOf", () => {
  it("returns the recorded size for a known image", () => {
    expect(sizeOf("/images/unsplash/tech-ai.webp")).toEqual([800, 534]);
    expect(sizeOf("/images/og.png")).toEqual([1200, 630]);
  });

  it("falls back when the path is unknown", () => {
    expect(sizeOf("/images/missing.webp")).toEqual([1200, 800]);
  });
});
