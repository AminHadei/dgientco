// Simple Jalali (Shamsi) date conversion utilities
// Converts Gregorian dates to Jalali and formats with Persian digits

const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigits(num: number | string): string {
  return String(num).replace(/\d/g, (digit) => persianDigits[parseInt(digit)] ?? digit);
}

function div(a: number, b: number): number {
  return Math.floor(a / b);
}

function gregorianToJalali(
  gy: number,
  gm: number,
  gd: number,
): [number, number, number] {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

  let jy = gy <= 1600 ? 0 : 979;
  gy -= gy <= 1600 ? 621 : 1600;

  const gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    365 * gy +
    div(gy2 + 3, 4) -
    div(gy2 + 99, 100) +
    div(gy2 + 399, 400) -
    80 +
    gd +
    (g_d_m[gm - 1] ?? 0);

  jy += 33 * div(days, 12053);
  days %= 12053;

  jy += 4 * div(days, 1461);
  days %= 1461;

  if (days > 365) {
    jy += div(days - 1, 365);
    days = (days - 1) % 365;
  }

  const jm = days < 186 ? 1 + div(days, 31) : 7 + div(days - 186, 30);
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);

  return [jy, jm, jd];
}

const jalaliMonthNames = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

function toLocalDate(date: Date | string): Date {
  if (date instanceof Date) return date;
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return new Date(date);
}

export function jalaliYear(date: Date | string = new Date()): number {
  const d = toLocalDate(date);
  const [year] = gregorianToJalali(d.getFullYear(), d.getMonth() + 1, d.getDate());
  return year;
}

export function formatJalaliDate(date: Date | string, includeYear = true): string {
  const d = toLocalDate(date);
  const [jy, jm, jd] = gregorianToJalali(
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
  );

  const day = toPersianDigits(jd);
  const month = jalaliMonthNames[jm - 1] ?? "";
  const year = includeYear ? ` ${toPersianDigits(jy)}` : "";

  return `${day} ${month}${year}`;
}

export function formatJalaliDateShort(date: Date | string): string {
  const d = toLocalDate(date);
  const [jy, jm, jd] = gregorianToJalali(
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
  );

  return toPersianDigits(
    `${jy}/${jm.toString().padStart(2, "0")}/${jd.toString().padStart(2, "0")}`,
  );
}
