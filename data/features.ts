export interface Feature {
  id: string
  title: string
  description: string
  image: string
}

export const features: Feature[] = [
  {
    id: 'feature-1',
    title: 'راهکارهای هوش مصنوعی',
    description: 'پیاده‌سازی سیستم‌های هوشمند و یادگیری ماشین برای بهبود فرآیندهای کسب‌وکار شما با استفاده از جدیدترین تکنولوژی‌های روز دنیا.',
    image: '/images/feature-1.jpg',
  },
  {
    id: 'feature-2',
    title: 'تحول دیجیتال سازمانی',
    description: 'همراهی در مسیر تحول دیجیتال با ارائه مشاوره، طراحی و اجرای استراتژی‌های نوین برای سازمان‌های پیشرو و نوآور.',
    image: '/images/feature-2.jpg',
  },
  {
    id: 'feature-3',
    title: 'امنیت سایبری پیشرفته',
    description: 'محافظت از دارایی‌های دیجیتال سازمان با بهره‌گیری از جدیدترین روش‌های امنیتی و پیشگیری از تهدیدات سایبری.',
    image: '/images/feature-3.jpg',
  },
  {
    id: 'feature-4',
    title: 'زیرساخت ابری مقیاس‌پذیر',
    description: 'طراحی و پیاده‌سازی زیرساخت‌های ابری انعطاف‌پذیر که با رشد کسب‌وکار شما گسترش می‌یابند و کارایی بالایی دارند.',
    image: '/images/feature-4.jpg',
  },
]
