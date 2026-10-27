export interface Person {
  name: string;
  role: string;
  initials: string;
}

export const boardMembers: Person[] = [
  { name: "دکتر رضا رادفر", role: "عضو هیئت‌مدیره", initials: "رر" },
  { name: "دکتر فرنیا", role: "عضو هیئت‌مدیره", initials: "ف" },
  { name: "دکتر علیفری", role: "عضو هیئت‌مدیره", initials: "ع" },
];

export const managers: Person[] = [
  { name: "دکتر آرنوش شاکری", role: "مدیرعامل", initials: "آش" },
  { name: "مهندس فرزانه دهقان نیری", role: "مدیر اجرایی", initials: "فد" },
  {
    name: "دکتر الهام عیوض‌زاده",
    role: "مدیر پروژه‌های اکوسیستم فناوری و نوآوری",
    initials: "اع",
  },
  {
    name: "مهندس مائده توفیقی",
    role: "مدیر پروژه‌های مالی و حسابداری",
    initials: "مت",
  },
];

export const people: Person[] = [...boardMembers, ...managers];
