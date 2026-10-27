import { describe, expect, it } from "vitest";
import { companyEmail, companyPhoneTel } from "../../app/data/contact";
import { people } from "../../app/data/management";
import { partners } from "../../app/data/partners";
import { siteAlternateName, siteLegalName, siteName } from "../../app/utils/site";

describe("company facts", () => {
  it("keeps the short name, the legal name, and the latin mark apart", () => {
    expect(siteName).toBe("فنصاد");
    expect(siteLegalName).toBe("فناوری‌های نوین صنعت و انرژی دانش‌گستر (سهامی خاص)");
    expect(siteAlternateName).toBe("DGIENT");
    expect(siteLegalName.includes(siteAlternateName)).toBe(false);
  });

  it("counts the published people and partners", () => {
    expect(people).toHaveLength(7);
    expect(partners).toHaveLength(3);
    expect(partners.filter((partner) => partner.href).length).toBe(2);
  });

  it("uses the published phone and email", () => {
    expect(companyPhoneTel).toBe("+982144867165");
    expect(companyEmail).toBe("fansad.company@gmail.com");
  });
});
