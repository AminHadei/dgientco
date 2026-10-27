// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-27',
  
  ssr: true,
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  
  content: {
    documentDriven: false,
    markdown: {
      anchorLinks: false,
    },
  },
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'دجینت‌کو - بزرگترین پردیس استارت‌آپی خاورمیانه',
      meta: [
        { name: 'description', content: 'دجینت‌کو به بیش از ۱۰۰۰ استارت‌آپ دسترسی به اکوسیستم، شرکا و سرمایه‌گذاران می‌دهد.' },
        { name: 'theme-color', content: '#1c1917' },
        { property: 'og:site_name', content: 'دجینت‌کو' },
        { property: 'og:locale', content: 'fa_IR' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/vazirmatn-arabic-400-normal.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/vazirmatn-arabic-900-normal.woff2', crossorigin: 'anonymous' },
      ],
    },
  },
  
  
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/news',
        '/contact',
        '/contact/visits',
        '/contact/sales',
        '/contact/press',
        '/legal-information',
        '/privacy-policy',
        '/terms',
        '/startups',
        '/programs',
        '/programs/in-house',
        '/programs/resources',
        '/events',
        '/events/spaces',
        '/sitemap.xml',
      ],
    },
  },
  
  devtools: { enabled: false },
})
