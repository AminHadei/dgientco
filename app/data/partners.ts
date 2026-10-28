export interface Partner {
  name: string;
  lines: readonly string[];
  href?: string;
  logo: string;
}

export const partners: Partner[] = [
  {
    name: "صندوق پژوهش و فناوری دانشگاه آزاد اسلامی",
    lines: ["صندوق پژوهش و فناوری دانشگاه آزاد اسلامی"],
    href: "https://azadfund.ir/",
    logo: "/images/partners/azadfund.webp",
  },
  {
    name: "دانشکده مدیریت و اقتصاد دانشگاه آزاد اسلامی (واحد علوم و تحقیقات تهران)",
    lines: [
      "دانشکده مدیریت و اقتصاد دانشگاه آزاد اسلامی",
      "(واحد علوم و تحقیقات تهران)",
    ],
    href: "https://srb.iau.ir/rcnlm",
    logo: "/images/partners/rcnlm.webp",
  },
  {
    name: "گروه مالی نیک‌اندیشان",
    lines: ["گروه مالی نیک‌اندیشان"],
    logo: "/images/partners/nikandishan.webp",
  },
];
