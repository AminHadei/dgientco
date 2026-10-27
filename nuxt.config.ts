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
      title: 'دجینت‌کو - شرکت فناوری دجینت',
      meta: [
        { name: 'description', content: 'دجینت‌کو - پیشرو در حوزه فناوری و نوآوری دیجیتال' },
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
      ],
    },
  },
  
  devtools: { enabled: false },
})
