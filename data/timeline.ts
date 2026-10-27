export interface TimelineItem {
  year: string
  title: string
  description: string
  image: string
}

export const timeline: TimelineItem[] = [
  {
    year: '۱۳۹۵',
    title: 'تاسیس دجینت‌کو',
    description: 'آغاز فعالیت با هدف ارائه راهکارهای نوآورانه فناوری به کسب‌وکارهای ایرانی و ایجاد تحول در صنعت فناوری اطلاعات کشور.',
    image: '/images/timeline-1.jpg',
  },
  {
    year: '۱۳۹۸',
    title: 'گسترش خدمات',
    description: 'افتتاح دفاتر جدید در شهرهای بزرگ و ارائه خدمات به بیش از ۲۰۰ شرکت و سازمان در سراسر کشور با تیمی متخصص.',
    image: '/images/timeline-2.jpg',
  },
  {
    year: '۱۴۰۱',
    title: 'پیشرو در نوآوری',
    description: 'دریافت جوایز ملی و بین‌المللی در زمینه نوآوری و کیفیت خدمات، و تبدیل شدن به یکی از برندهای برتر فناوری در منطقه.',
    image: '/images/timeline-3.jpg',
  },
]
