export interface Program {
  id: string
  name: string
  description: string
  category: string
  logo?: string
  joinLink?: string
}

export interface InHouseProgram {
  id: string
  name: string
  status: string
  description: string
  background: string
  bullets: string[]
  keyFeatures: {
    audience: string
    location: string
    format: string
    price: string
    language: string
  }
}

export interface Resource {
  id: string
  title: string
  description: string
  image: string
}

export interface ResourceGroup {
  title: string
  resources: Resource[]
}

export const programs: Program[] = [
  {
    id: 'ai-program',
    name: 'برنامه هوش مصنوعی',
    description: 'برنامه تخصصی برای استارت‌آپ‌های حوزه AI و یادگیری ماشین',
    category: 'فناوری پیشرفته',
  },
  {
    id: 'fintech-program',
    name: 'برنامه فین‌تک',
    description: 'حمایت از نوآوری‌های مالی و پرداخت دیجیتال',
    category: 'فین‌تک',
  },
  {
    id: 'healthtech-program',
    name: 'برنامه هلث‌تک',
    description: 'راه‌حل‌های دیجیتال برای حوزه سلامت و درمان',
    category: 'سلامت',
  },
  {
    id: 'climate-program',
    name: 'برنامه کلایمت‌تک',
    description: 'فناوری‌های پاک و راه‌حل‌های محیط‌زیستی',
    category: 'محیط زیست',
  },
  {
    id: 'edtech-program',
    name: 'برنامه ادتک',
    description: 'نوآوری در آموزش و یادگیری دیجیتال',
    category: 'آموزش',
  },
  {
    id: 'blockchain-program',
    name: 'برنامه بلاک‌چین',
    description: 'استارت‌آپ‌های Web3 و فناوری بلاک‌چین',
    category: 'بلاک‌چین',
  },
  {
    id: 'women-program',
    name: 'برنامه زنان کارآفرین',
    description: 'حمایت ویژه از بنیان‌گذاران زن',
    category: 'تنوع و شمول',
  },
  {
    id: 'international-program',
    name: 'برنامه بین‌المللی',
    description: 'برای استارت‌آپ‌های خارجی که می‌خواهند وارد بازار ایران شوند',
    category: 'بین‌المللی',
  },
  {
    id: 'corporate-program',
    name: 'برنامه شرکتی',
    description: 'همکاری بین استارت‌آپ‌ها و شرکت‌های بزرگ',
    category: 'شرکتی',
  },
  {
    id: 'deeptech-program',
    name: 'برنامه دیپ‌تک',
    description: 'فناوری‌های پیچیده و تحقیق‌محور',
    category: 'دیپ‌تک',
  },
  {
    id: 'impact-program',
    name: 'برنامه تاثیرگذاری اجتماعی',
    description: 'استارت‌آپ‌هایی که مسائل اجتماعی را حل می‌کنند',
    category: 'تاثیر اجتماعی',
  },
  {
    id: 'mobility-program',
    name: 'برنامه موبیلیتی',
    description: 'نوآوری در حمل‌ونقل و لجستیک',
    category: 'موبیلیتی',
  },
  {
    id: 'foodtech-program',
    name: 'برنامه فودتک',
    description: 'فناوری در صنعت غذا و کشاورزی',
    category: 'غذا',
  },
  {
    id: 'proptech-program',
    name: 'برنامه پراپ‌تک',
    description: 'فناوری املاک و مستغلات',
    category: 'املاک',
  },
  {
    id: 'retail-program',
    name: 'برنامه خرده‌فروشی',
    description: 'نوآوری در تجارت و خرده‌فروشی',
    category: 'تجارت',
  },
  {
    id: 'cybersecurity-program',
    name: 'برنامه امنیت سایبری',
    description: 'راه‌حل‌های امنیتی و حفاظت از داده',
    category: 'امنیت',
  },
]

export const inHousePrograms: InHouseProgram[] = [
  {
    id: 'founders-program',
    name: 'برنامه بنیان‌گذاران',
    status: 'ثبت‌نام باز است',
    description: 'برنامه ۶ ماهه برای بنیان‌گذاران در مراحل اولیه که به دنبال ساخت محصول و یافتن مشتریان اولیه هستند.',
    background: 'bg-accent-orange',
    bullets: [
      'دسترسی به فضای کاری اختصاصی',
      'منتورینگ هفتگی با کارآفرینان موفق',
      'شبکه‌سازی با سرمایه‌گذاران',
      'دسترسی به منابع فنی و حقوقی',
    ],
    keyFeatures: {
      audience: 'بنیان‌گذاران تازه‌کار',
      location: 'حضوری در دجینت‌کو',
      format: '۶ ماه تمام‌وقت',
      price: 'رایگان',
      language: 'فارسی و انگلیسی',
    },
  },
  {
    id: 'scale-program',
    name: 'برنامه مقیاس‌پذیری',
    status: 'ثبت‌نام باز است',
    description: 'برای استارت‌آپ‌هایی که محصول خود را ساخته‌اند و آماده رشد سریع هستند. تمرکز بر فروش، بازاریابی و جذب سرمایه.',
    background: 'bg-accent-blue-light',
    bullets: [
      'دسترسی به شبکه ۷۰۰+ سرمایه‌گذار',
      'کارگاه‌های تخصصی رشد و مقیاس‌پذیری',
      'معرفی به شرکای استراتژیک',
      'مشاوره جذب سرمایه',
    ],
    keyFeatures: {
      audience: 'استارت‌آپ‌های رشدیافته',
      location: 'حضوری و آنلاین',
      format: '۳ ماه نیمه‌وقت',
      price: 'رایگان',
      language: 'فارسی و انگلیسی',
    },
  },
  {
    id: 'international-expansion',
    name: 'برنامه توسعه بین‌المللی',
    status: 'درخواست دعوت',
    description: 'کمک به استارت‌آپ‌های ایرانی برای ورود به بازارهای جهانی و ایجاد حضور بین‌المللی.',
    background: 'bg-white',
    bullets: [
      'شبکه‌سازی با شرکای بین‌المللی',
      'مشاوره ورود به بازار',
      'کمک در امور قانونی و مالیاتی',
      'معرفی به سرمایه‌گذاران خارجی',
    ],
    keyFeatures: {
      audience: 'استارت‌آپ‌های آماده توسعه',
      location: 'آنلاین و سفرهای کاری',
      format: 'انعطاف‌پذیر',
      price: 'بر اساس خدمات',
      language: 'انگلیسی',
    },
  },
  {
    id: 'corporate-innovation',
    name: 'برنامه نوآوری شرکتی',
    status: 'ثبت‌نام باز است',
    description: 'برنامه همکاری بین استارت‌آپ‌ها و شرکت‌های بزرگ برای ایجاد نوآوری و حل مسائل صنعتی.',
    background: 'bg-muted',
    bullets: [
      'دسترسی به چالش‌های واقعی شرکت‌ها',
      'همکاری با تیم‌های نوآوری شرکتی',
      'فرصت پایلوت و POC',
      'شبکه‌سازی با مدیران ارشد',
    ],
    keyFeatures: {
      audience: 'استارت‌آپ‌های B2B',
      location: 'حضوری در دجینت‌کو',
      format: '۴ ماه',
      price: 'رایگان',
      language: 'فارسی',
    },
  },
]

export const resourceGroups: ResourceGroup[] = [
  {
    title: 'آموزش و توسعه',
    resources: [
      {
        id: 'workshops',
        title: 'کارگاه‌های تخصصی',
        description: 'کارگاه‌های هفتگی در زمینه‌های مختلف فناوری، کسب‌وکار و بازاریابی',
        image: '/images/unsplash/team-meeting.webp',
      },
      {
        id: 'mentorship',
        title: 'برنامه منتورینگ',
        description: 'دسترسی به شبکه منتورهای باتجربه از صنایع مختلف',
        image: '/images/unsplash/collaboration.webp',
      },
      {
        id: 'online-courses',
        title: 'دوره‌های آنلاین',
        description: 'دسترسی به کتابخانه دوره‌های آنلاین و منابع آموزشی',
        image: '/images/unsplash/tech-work.webp',
      },
      {
        id: 'bootcamps',
        title: 'بوت‌کمپ‌ها',
        description: 'بوت‌کمپ‌های فشرده برای یادگیری سریع مهارت‌های جدید',
        image: '/images/unsplash/startup-team.webp',
      },
    ],
  },
  {
    title: 'شبکه و ارتباطات',
    resources: [
      {
        id: 'networking',
        title: 'رویدادهای شبکه‌سازی',
        description: 'رویدادهای ماهانه برای ملاقات با کارآفرینان، سرمایه‌گذاران و شرکای بالقوه',
        image: '/images/unsplash/team-working.webp',
      },
      {
        id: 'demo-days',
        title: 'روزهای دمو',
        description: 'فرصت ارائه استارت‌آپ خود به سرمایه‌گذاران و رسانه‌ها',
        image: '/images/unsplash/award-celebration.webp',
      },
      {
        id: 'community',
        title: 'جامعه استارت‌آپی',
        description: 'عضویت در بزرگترین جامعه استارت‌آپی منطقه',
        image: '/images/unsplash/building-exterior.webp',
      },
      {
        id: 'alumni-network',
        title: 'شبکه فارغ‌التحصیلان',
        description: 'ارتباط با بیش از ۹۰۰۰ استارت‌آپ که از دجینت‌کو فارغ‌التحصیل شده‌اند',
        image: '/images/unsplash/innovation-team.webp',
      },
    ],
  },
  {
    title: 'خدمات حرفه‌ای',
    resources: [
      {
        id: 'legal',
        title: 'مشاوره حقوقی',
        description: 'دسترسی به وکلای متخصص برای مسائل قراردادی و ثبت شرکت',
        image: '/images/unsplash/tech-ai.webp',
      },
      {
        id: 'accounting',
        title: 'خدمات حسابداری',
        description: 'کمک در امور مالی، حسابداری و مالیات',
        image: '/images/unsplash/partnership.webp',
      },
      {
        id: 'hr',
        title: 'منابع انسانی',
        description: 'کمک در استخدام، مدیریت کارکنان و فرهنگ سازمانی',
        image: '/images/unsplash/datacenter.webp',
      },
      {
        id: 'pr',
        title: 'روابط عمومی',
        description: 'خدمات PR و ارتباط با رسانه‌ها',
        image: '/images/unsplash/partnership.webp',
      },
    ],
  },
  {
    title: 'زیرساخت و ابزار',
    resources: [
      {
        id: 'cloud-credits',
        title: 'اعتبار ابری',
        description: 'دسترسی به اعتبارات رایگان سرویس‌های ابری AWS، Google Cloud و Azure',
        image: '/images/unsplash/datacenter.webp',
      },
      {
        id: 'software-tools',
        title: 'ابزارهای نرم‌افزاری',
        description: 'تخفیف ویژه در ابزارهای کسب‌وکار و توسعه نرم‌افزار',
        image: '/images/unsplash/tech-work.webp',
      },
      {
        id: 'office-space',
        title: 'فضای کاری',
        description: 'دسترسی به فضای کاری مجهز با تمام امکانات',
        image: '/images/unsplash/hero-coworking.webp',
      },
      {
        id: 'labs',
        title: 'آزمایشگاه‌ها',
        description: 'دسترسی به آزمایشگاه‌های تخصصی IoT، AI و سخت‌افزار',
        image: '/images/unsplash/innovation-team.webp',
      },
    ],
  },
]
