import { describe, expect, it } from "vitest";
import {
  formatJalaliDate,
  formatJalaliDateShort,
  toPersianDigits,
} from "../../app/utils/jalali";

describe("toPersianDigits", () => {
  it("replaces ASCII digits and keeps other characters", () => {
    expect(toPersianDigits(1403)).toBe("۱۴۰۳");
    expect(toPersianDigits("2024-10")).toBe("۲۰۲۴-۱۰");
    expect(toPersianDigits("فنصاد")).toBe("فنصاد");
  });
});

describe("formatJalaliDate", () => {
  it("formats known Gregorian dates with Persian digits", () => {
    expect(formatJalaliDate("1979-02-11")).toBe("۲۲ بهمن ۱۳۵۷");
    expect(formatJalaliDate("2021-03-20")).toBe("۳۰ اسفند ۱۳۹۹");
    expect(formatJalaliDate("2023-03-21")).toBe("۱ فروردین ۱۴۰۲");
    expect(formatJalaliDate("2024-03-19")).toBe("۲۹ اسفند ۱۴۰۲");
    expect(formatJalaliDate("2024-03-20")).toBe("۱ فروردین ۱۴۰۳");
    expect(formatJalaliDate("2024-10-20")).toBe("۲۹ مهر ۱۴۰۳");
    expect(formatJalaliDate("2024-10-27")).toBe("۶ آبان ۱۴۰۳");
  });

  it("can omit the year", () => {
    expect(formatJalaliDate("2024-10-27", false)).toBe("۶ آبان");
  });

  it("reads the calendar date from an ISO string and a local Date", () => {
    expect(formatJalaliDate("2024-10-27T23:30:00.000Z")).toBe("۶ آبان ۱۴۰۳");
    expect(formatJalaliDate(new Date(2024, 9, 27))).toBe("۶ آبان ۱۴۰۳");
  });
});

describe("formatJalaliDateShort", () => {
  it("uses zero-padded Persian digits", () => {
    expect(formatJalaliDateShort("2024-03-20")).toBe("۱۴۰۳/۰۱/۰۱");
    expect(formatJalaliDateShort("2024-10-27")).toBe("۱۴۰۳/۰۸/۰۶");
    expect(formatJalaliDateShort(new Date(2024, 9, 20))).toBe("۱۴۰۳/۰۷/۲۹");
  });
});
