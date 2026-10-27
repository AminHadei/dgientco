export interface Event {
  id: string
  title: string
  date: Date
  timeStart: string
  timeEnd: string
  venue: string
  description?: string
}

export interface Venue {
  id: string
  name: string
  capacity: string
  description: string
  images: string[]
}

export const events: Event[] = [
  {
    id: 'ai-summit-2024',
    title: 'نشست سالانه هوش مصنوعی',
    date: new Date('2024-11-15'),
    timeStart: '۹:۰۰',
    timeEnd: '۱۸:۰۰',
    venue: 'سالن اصلی دجینت‌کو',
    description: 'بزرگترین رویداد AI در منطقه با حضور متخصصان بین‌المللی',
  },
  {
    id: 'startup-weekend',
    title: 'آخر هفته استارت‌آپی',
    date: new Date('2024-11-22'),
    timeStart: '۱۰:۰۰',
    timeEnd: '۲۰:۰۰',
    venue: 'فضای نوآوری',
  },
  {
    id: 'fintech-meetup',
    title: 'جلسه فین‌تک',
    date: new Date('2024-11-28'),
    timeStart: '۱۷:۰۰',
    timeEnd: '۲۰:۰۰',
    venue: 'سالن کنفرانس ب',
  },
  {
    id: 'demo-day-fall',
    title: 'روز دمو پاییز ۱۴۰۳',
    date: new Date('2024-12-05'),
    timeStart: '۱۴:۰۰',
    timeEnd: '۱۹:۰۰',
    venue: 'سالن اصلی دجینت‌کو',
    description: 'استارت‌آپ‌ها محصولات خود را به سرمایه‌گذاران معرفی می‌کنند',
  },
  {
    id: 'women-in-tech',
    title: 'زنان در فناوری',
    date: new Date('2024-12-12'),
    timeStart: '۱۶:۰۰',
    timeEnd: '۱۹:۰۰',
    venue: 'سالن کنفرانس الف',
  },
  {
    id: 'blockchain-workshop',
    title: 'کارگاه بلاک‌چین',
    date: new Date('2024-12-18'),
    timeStart: '۱۰:۰۰',
    timeEnd: '۱۶:۰۰',
    venue: 'آزمایشگاه فناوری',
  },
  {
    id: 'investor-meetup',
    title: 'ملاقات با سرمایه‌گذاران',
    date: new Date('2024-12-20'),
    timeStart: '۱۸:۰۰',
    timeEnd: '۲۱:۰۰',
    venue: 'لابی مرکزی',
  },
  {
    id: 'new-year-party',
    title: 'جشن پایان سال',
    date: new Date('2024-12-28'),
    timeStart: '۱۹:۰۰',
    timeEnd: '۲۳:۰۰',
    venue: 'سالن اصلی دجینت‌کو',
  },
]

export const venues: Venue[] = [
  {
    id: 'main-hall',
    name: 'سالن اصلی دجینت‌کو',
    capacity: '۱۰۰۰ نفر',
    description: 'سالن بزرگ با تجهیزات کامل صوتی و تصویری، مناسب برای کنفرانس‌ها و رویدادهای بزرگ. دارای صفحه نمایش غول‌پیکر، سیستم صوتی حرفه‌ای و نورپردازی پیشرفته.',
    images: ['/images/unsplash/hero-coworking.jpg', '/images/unsplash/building-exterior.jpg', '/images/unsplash/team-working.jpg'],
  },
  {
    id: 'conference-a',
    name: 'سالن کنفرانس الف',
    capacity: '۲۰۰ نفر',
    description: 'سالن کنفرانس با امکانات مدرن برای جلسات، سمینارها و کارگاه‌ها. شامل میکروفن‌های بی‌سیم، پروژکتور و تخته هوشمند.',
    images: ['/images/unsplash/team-meeting.jpg', '/images/unsplash/collaboration.jpg', '/images/unsplash/tech-work.jpg'],
  },
  {
    id: 'conference-b',
    name: 'سالن کنفرانس ب',
    capacity: '۱۵۰ نفر',
    description: 'فضای صمیمی برای جلسات متوسط و رویدادهای شبکه‌سازی. طراحی شده با امکان تنظیم چیدمان میزها.',
    images: ['/images/unsplash/startup-team.jpg', '/images/unsplash/team-working.jpg', '/images/unsplash/innovation-team.jpg'],
  },
  {
    id: 'innovation-space',
    name: 'فضای نوآوری',
    capacity: '۱۰۰ نفر',
    description: 'فضای انعطاف‌پذیر برای هکاتون‌ها، بوت‌کمپ‌ها و رویدادهای تعاملی. شامل تخته‌های وایت‌برد دیواری و میزهای متحرک.',
    images: ['/images/unsplash/collaboration.jpg', '/images/unsplash/tech-ai.jpg', '/images/unsplash/hero-coworking.jpg'],
  },
  {
    id: 'tech-lab',
    name: 'آزمایشگاه فناوری',
    capacity: '۵۰ نفر',
    description: 'آزمایشگاه مجهز برای کارگاه‌های فنی و آموزشی. دارای کامپیوترهای قدرتمند، تجهیزات IoT و ابزارهای توسعه.',
    images: ['/images/unsplash/tech-work.jpg', '/images/unsplash/datacenter.jpg', '/images/unsplash/tech-ai.jpg'],
  },
  {
    id: 'rooftop-terrace',
    name: 'تراس روف‌تاپ',
    capacity: '۳۰۰ نفر',
    description: 'فضای باز در بام با منظره شهر، مناسب برای رویدادهای شبکه‌سازی و مهمانی‌ها. شامل بار و منطقه نشیمن.',
    images: ['/images/unsplash/building-exterior.jpg', '/images/unsplash/team-working.jpg', '/images/unsplash/innovation-team.jpg'],
  },
  {
    id: 'central-lobby',
    name: 'لابی مرکزی',
    capacity: '۵۰۰ نفر',
    description: 'فضای مرکزی با معماری خیره‌کننده، مناسب برای نمایشگاه‌ها، استندها و رویدادهای نمایشی.',
    images: ['/images/unsplash/hero-coworking.jpg', '/images/unsplash/building-exterior.jpg', '/images/unsplash/collaboration.jpg'],
  },
  {
    id: 'meeting-pods',
    name: 'اتاق‌های جلسه کوچک',
    capacity: '۱۰-۲۰ نفر',
    description: 'مجموعه اتاق‌های جلسه کوچک برای ملاقات‌ها و جلسات خصوصی. هر اتاق مجهز به ویدئو کنفرانس.',
    images: ['/images/unsplash/team-meeting.jpg', '/images/unsplash/tech-work.jpg', '/images/unsplash/collaboration.jpg'],
  },
  {
    id: 'demo-room',
    name: 'اتاق دمو',
    capacity: '۳۰ نفر',
    description: 'فضای مخصوص برای ارائه محصول و دموهای فنی. شامل صفحه نمایش بزرگ و تجهیزات ضبط ویدئو.',
    images: ['/images/unsplash/tech-ai.jpg', '/images/unsplash/startup-team.jpg', '/images/unsplash/innovation-team.jpg'],
  },
  {
    id: 'podcast-studio',
    name: 'استودیو پادکست',
    capacity: '۵ نفر',
    description: 'استودیوی حرفه‌ای با عایق صوتی برای ضبط پادکست، ویدیو و مصاحبه. شامل دوربین‌ها و میکروفون‌های استودیویی.',
    images: ['/images/unsplash/tech-work.jpg', '/images/unsplash/team-meeting.jpg', '/images/unsplash/collaboration.jpg'],
  },
]
