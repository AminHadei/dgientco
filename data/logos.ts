export interface Logo {
  id: string;
  name: string;
  badge?: string;
}

export const partnerLogos: Logo[] = [
  { id: "partner-1", name: "شرکت فناوری پارس", badge: "همکار استراتژیک" },
  { id: "partner-2", name: "گروه صنعتی البرز" },
  { id: "partner-3", name: "شرکت نوآوری زاگرس" },
  { id: "partner-4", name: "هولدینگ دماوند" },
  { id: "partner-5", name: "شرکت دیجیتال سبلان" },
  { id: "partner-6", name: "گروه تکنولوژی تدبیر" },
];

export const carouselLogos: Logo[] = [
  { id: "carousel-1", name: "صنایع خودرو", badge: "برند معتبر" },
  { id: "carousel-2", name: "بانک توسعه", badge: "شریک مالی" },
  { id: "carousel-3", name: "فناوری ابری پارس", badge: "همکار فناوری" },
  { id: "carousel-4", name: "شرکت مخابرات", badge: "شریک ارتباطی" },
  { id: "carousel-5", name: "صنایع نفت و گاز", badge: "مشتری ویژه" },
  { id: "carousel-6", name: "پتروشیمی ملی", badge: "برند معتبر" },
];

export const pressLogos: Logo[] = [
  { id: "press-1", name: "روزنامه اقتصادی" },
  { id: "press-2", name: "مجله فناوری" },
  { id: "press-3", name: "خبرگزاری صنعت" },
  { id: "press-4", name: "نشریه نوآوری" },
  { id: "press-5", name: "مجله کسب‌وکار" },
  { id: "press-6", name: "پایگاه خبری تک" },
];
