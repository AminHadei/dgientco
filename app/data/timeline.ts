export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "۱۳۹۵",
    title: "یک بنای تاریخی",
    description:
      "ساختمان توسط مهندس یوژن فرسینه ساخته شد. سالن فرسینه سابق در اصل یک ایستگاه باری بود و نوآوری بزرگی برای زمان خود محسوب می‌شد. نمادین، نورانی و آینده‌نگر.",
    image: "/images/unsplash/building-exterior.webp",
  },
  {
    year: "۱۳۹۸",
    title: "یک ایده جسورانه",
    description:
      "بنیان‌گذار ما، احمد نادری، ساختمان را با ایده‌ای جسورانه خریداری کرد: تبدیل این شاهکار صنعتی به بزرگترین پردیس استارت‌آپی منطقه. هدف او؟ گردهم آوردن ۱۰۰۰ استارت‌آپ زیر یک سقف.",
    image: "/images/unsplash/team-working.webp",
  },
  {
    year: "۱۴۰۱",
    title: "پیشتاز نوآوری",
    description:
      "از زمان افتتاح، آن شرط‌بندی به نتیجه رسید: هر ساله بیش از ۱۰۰۰ استارت‌آپ دجینت‌کو را خانه خود می‌نامند، علاوه بر بسیاری از شرکای درجه یک جهانی که در پردیس حضور دارند.",
    image: "/images/unsplash/innovation-team.webp",
  },
];
