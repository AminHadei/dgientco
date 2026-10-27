export interface Feature {
  id: string
  title: string
  description: string
  image: string
}

export const features: Feature[] = [
  {
    id: 'feature-1',
    title: 'ارتباطات تجاری بین‌المللی بی‌نظیر',
    description: 'کسب‌وکار عمدتاً مبتنی بر روابط است. اگر به دنبال ملاقات با کسی هستید - چه مدیرعامل یا نخست‌وزیر - شانس خوبی برای ملاقات با آن‌ها در دجینت‌کو دارید.',
    image: '/images/unsplash/team-meeting.webp',
  },
  {
    id: 'feature-2',
    title: 'در کنار استارت‌آپ‌ها و شرکت‌های پیشرو باشید',
    description: 'استارت‌آپ خود را در کنار ۱۰۰۰ شرکت پیشرفته و بنیان‌گذاران باتجربه بین‌المللی در یکی از پویاترین مراکز نوآوری منطقه بسازید.',
    image: '/images/unsplash/tech-work.webp',
  },
  {
    id: 'feature-3',
    title: 'فضای کار و زندگی منحصربه‌فرد',
    description: 'اینها فقط میز نیستند! ساختمان نمادین ما در مرکز شهر واقع شده و یک بنای تاریخی است. فضاهای کاری ما کاملاً مجهز و برای انعطاف‌پذیری طراحی شده‌اند.',
    image: '/images/unsplash/collaboration.webp',
  },
  {
    id: 'feature-4',
    title: 'خدماتی که در جای دیگری پیدا نمی‌کنید',
    description: 'دجینت‌کو بالاترین تمرکز برندهای برتر جهانی را در یک پردیس گرد هم می‌آورد تا از رشد شما حمایت کنند. به برنامه‌های جهانی در حوزه فناوری‌های پیشرفته دسترسی داشته باشید.',
    image: '/images/unsplash/startup-team.webp',
  },
]
