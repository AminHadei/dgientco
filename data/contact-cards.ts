export interface ContactCard {
  id: string
  title: string
  description: string
  link: string
  icon: string
}

export const contactCards: ContactCard[] = [
  {
    id: 'visits',
    title: 'بازدید از دفتر',
    description: 'برای بازدید حضوری از دفتر و آشنایی با تیم ما، لطفا وقت قبلی دریافت کنید.',
    link: '/contact/visits',
    icon: 'building',
  },
  {
    id: 'sales',
    title: 'فروش و همکاری',
    description: 'برای اطلاعات بیشتر درباره محصولات و خدمات، یا شروع همکاری با ما تماس بگیرید.',
    link: '/contact/sales',
    icon: 'handshake',
  },
  {
    id: 'press',
    title: 'رسانه و مطبوعات',
    description: 'برای دریافت اطلاعات مطبوعاتی، مصاحبه یا همکاری رسانه‌ای با ما در ارتباط باشید.',
    link: '/contact/press',
    icon: 'newspaper',
  },
  {
    id: 'support',
    title: 'پشتیبانی فنی',
    description: 'تیم پشتیبانی ما آماده پاسخگویی به سوالات فنی و رفع مشکلات شما است.',
    link: 'mailto:support@dgientco.com',
    icon: 'support',
  },
]
