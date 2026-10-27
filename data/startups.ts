export interface Startup {
  id: string
  name: string
  logo?: string
  backedBy: string
  description: string
  metric?: string
  tag?: string
}

export const startups: Startup[] = [
  {
    id: 'startup-1',
    name: 'هوش‌یار',
    backedBy: 'حمایت‌شده توسط دجینت‌کو',
    description: 'پلتفرم هوش مصنوعی برای تحلیل داده‌های کسب‌وکار',
    metric: 'یونیکورن',
    tag: 'هوش مصنوعی',
  },
  {
    id: 'startup-2',
    name: 'پرداخت‌سریع',
    backedBy: 'برنامه فین‌تک',
    description: 'راه‌حل پرداخت دیجیتال برای کسب‌وکارهای کوچک',
    metric: '۲ میلیون کاربر',
  },
  {
    id: 'startup-3',
    name: 'درمان‌آنلاین',
    backedBy: 'برنامه سلامت دیجیتال',
    description: 'پلتفرم مشاوره پزشکی آنلاین و تله‌مدیسین',
    metric: 'جذب ۵۰ میلیون تومان',
  },
  {
    id: 'startup-4',
    name: 'لجستیک هوشمند',
    backedBy: 'حمایت‌شده توسط دجینت‌کو',
    description: 'سیستم مدیریت زنجیره تامین با هوش مصنوعی',
    tag: 'لجستیک',
  },
  {
    id: 'startup-5',
    name: 'آموزش‌یار',
    backedBy: 'برنامه ادتک',
    description: 'پلتفرم آموزش آنلاین با محتوای تعاملی',
    metric: '۵۰۰ هزار دانش‌آموز',
  },
  {
    id: 'startup-6',
    name: 'کشاورزی هوشمند',
    backedBy: 'برنامه کلایمت‌تک',
    description: 'راه‌حل IoT برای بهینه‌سازی کشاورزی',
    tag: 'کلایمت‌تک',
  },
  {
    id: 'startup-7',
    name: 'بازارچه',
    backedBy: 'حمایت‌شده توسط دجینت‌کو',
    description: 'مارکت‌پلیس B2B برای تامین‌کنندگان صنعتی',
    metric: 'خرید شده توسط گروه صنعتی',
  },
  {
    id: 'startup-8',
    name: 'امنیت‌سایبر',
    backedBy: 'برنامه امنیت',
    description: 'پلتفرم یکپارچه امنیت سایبری برای شرکت‌ها',
    metric: 'جذب ۱۰۰ میلیون تومان',
  },
  {
    id: 'startup-9',
    name: 'املاک‌دیجیتال',
    backedBy: 'برنامه پراپ‌تک',
    description: 'پلتفرم خرید و فروش و اجاره ملک با واقعیت مجازی',
    tag: 'پراپ‌تک',
  },
  {
    id: 'startup-10',
    name: 'انرژی پاک',
    backedBy: 'برنامه کلایمت‌تک',
    description: 'سیستم مدیریت انرژی خورشیدی برای خانه‌ها',
  },
  {
    id: 'startup-11',
    name: 'رسانه‌سازی',
    backedBy: 'حمایت‌شده توسط دجینت‌کو',
    description: 'پلتفرم تولید و توزیع محتوای دیجیتال',
    metric: '۱۰ میلیون بیننده ماهانه',
  },
  {
    id: 'startup-12',
    name: 'موبیلیتی هوشمند',
    backedBy: 'برنامه موبیلیتی',
    description: 'اپلیکیشن یکپارچه حمل‌ونقل شهری',
    tag: 'موبیلیتی',
  },
]

export const featuredProgram = {
  title: 'به برنامه‌های استارت‌آپی دجینت‌کو بپیوندید',
  description: 'بیش از ۳۰ برنامه تخصصی برای هر مرحله از رشد استارت‌آپ شما. از مرحله ایده تا مقیاس‌پذیری، ما در کنار شما هستیم.',
  image: '/images/unsplash/team-working.webp',
  link: '/programs',
}

export const investors: string[] = [
  'صندوق سرمایه‌گذاری پارس',
  'VC دماوند',
  'سرمایه‌گذاری البرز',
  'فاند زاگرس',
  'صندوق نوآوری ملی',
  'انجل اینوستورز تهران',
  'VC سبلان',
  'سرمایه‌گذاری توسعه',
  'فاند تدبیر',
  'گروه سرمایه‌گذاری آینده',
  'VC دیجیتال',
  'صندوق فناوری پیشرفته',
]
