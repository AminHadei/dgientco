<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <img 
          src="/images/unsplash/hero-coworking.jpg" 
          alt="دجینت‌کو"
          class="w-full h-full object-cover"
        >
      </div>

      <!-- Content -->
      <div class="container-custom relative z-20 text-center text-white py-32">
        <h1 class="text-display text-display-xl mb-8 max-w-5xl mx-auto">
          بزرگترین پردیس استارت‌آپی خاورمیانه
        </h1>
        
        <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          از ایده تا مقیاس‌پذیری: دجینت‌کو به بیش از ۱۰۰۰ استارت‌آپ دسترسی به اکوسیستم پرتاثیر، شبکه شرکای برتر و سرمایه‌گذاران برجسته را فراهم می‌کند
        </p>

        <div class="flex flex-wrap gap-4 justify-center mb-16">
          <NuxtLink to="/contact" class="btn-primary">
            شروع همکاری
          </NuxtLink>
          <NuxtLink to="/about" class="btn-secondary">
            بیشتر بدانید
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mt-20">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl md:text-5xl lg:text-6xl font-black mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm md:text-base font-medium opacity-90 uppercase tracking-wider">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 start-1/2 -translate-x-1/2 z-20">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="section-padding bg-muted">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="badge badge-primary">استارت‌آپ‌های موفق</span>
          </div>
          <h2 class="text-display text-display-lg mb-6">
            با افتخار ساخته شده در دجینت‌کو
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            از پردیس ما به صحنه جهانی - آشنایی با برخی از موفق‌ترین استارت‌آپ‌های دجینت‌کو
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="(logo, index) in carouselLogos"
            :key="logo.id"
            class="bg-white rounded-lg p-8 flex flex-col items-center justify-center gap-3 card-hover border border-border group"
          >
            <div class="w-full aspect-square bg-gradient-radial rounded-lg flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center">
                <span class="text-2xl font-black text-accent-blue">
                  {{ index === 0 ? '🦄' : logo.name.charAt(0) }}
                </span>
              </div>
            </div>
            <div v-if="logo.badge" class="badge badge-secondary text-[10px]">
              {{ logo.badge }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="badge badge-primary">برنامه‌ها</span>
          </div>
          <h2 class="text-display text-display-lg mb-6">
            به یکی از بیش از ۳۰ برنامه استارت‌آپی دجینت‌کو بپیوندید
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            پردیس ما میزبان بیش از ۳۰ برنامه استارت‌آپی است که توسط دجینت‌کو و شرکای برتر اجرا می‌شود
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="feature in features"
            :key="feature.id"
            class="group"
          >
            <div class="bg-white rounded-lg overflow-hidden border-2 border-border card-hover">
              <div class="aspect-video overflow-hidden bg-muted">
                <img 
                  :src="feature.image" 
                  :alt="feature.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-black mb-4">{{ feature.title }}</h3>
                <p class="text-muted-foreground leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="section-padding bg-accent-blue-light">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="badge bg-accent-blue text-white">شرکای برتر</span>
          </div>
          <h2 class="text-display text-display-lg mb-6">
            همچنین در پردیس حضور دارند
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            این شرکای برتر کارکنان و منابع اختصاصی خود را در پردیس دارند
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="logo in partnerLogos"
            :key="logo.id"
            class="bg-white rounded-lg p-6 flex items-center justify-center card-hover border border-border aspect-square"
          >
            <div class="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <span class="text-xs font-bold text-muted-foreground text-center px-2">
                {{ logo.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <div class="max-w-2xl">
            <div class="inline-block mb-4">
              <span class="badge badge-primary">اخبار و رویدادها</span>
            </div>
            <h2 class="text-display text-display-lg">
              در دجینت‌کو چه می‌گذرد
            </h2>
          </div>
          <NuxtLink to="/news" class="btn-primary shrink-0">
            همه اخبار
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            v-for="article in latestNews"
            :key="article.slug"
            class="group"
          >
            <NuxtLink :to="`/news/${article.slug}`" class="block">
              <div class="bg-white rounded-lg overflow-hidden border-2 border-border card-hover">
                <div class="aspect-video overflow-hidden bg-muted">
                  <img 
                    :src="article.image" 
                    :alt="article.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  >
                </div>
                <div class="p-6">
                  <div class="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                    {{ formatJalaliDate(article.date) }}
                  </div>
                  <h3 class="text-xl font-black mb-3 line-clamp-2 group-hover:text-accent-blue transition-colors">
                    {{ article.title }}
                  </h3>
                  <p class="text-muted-foreground line-clamp-2">{{ article.excerpt }}</p>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { stats } from '~/data/stats'
import { carouselLogos, partnerLogos } from '~/data/logos'
import { features } from '~/data/features'
import { formatJalaliDate } from '~/utils/jalali'

// Mock latest news - will be replaced with actual content
const latestNews = [
  {
    slug: 'new-ai-platform',
    title: 'رونمایی از پلتفرم هوش مصنوعی جدید',
    excerpt: 'دجینت‌کو با معرفی پلتفرم هوش مصنوعی خود، گامی بزرگ در راستای نوآوری برداشت',
    image: '/images/unsplash/tech-ai.jpg',
    date: '2024-10-20',
  },
  {
    slug: 'partnership-announcement',
    title: 'شراکت استراتژیک با شرکت پارس',
    excerpt: 'امضای تفاهم‌نامه همکاری با یکی از بزرگترین شرکت‌های فناوری کشور',
    image: '/images/unsplash/partnership.jpg',
    date: '2024-10-15',
  },
  {
    slug: 'innovation-award',
    title: 'دریافت جایزه نوآوری ملی',
    excerpt: 'دجینت‌کو برنده جایزه نوآوری در جشنواره ملی فناوری شد',
    image: '/images/unsplash/award-celebration.jpg',
    date: '2024-10-10',
  },
]

useHead({
  title: 'دجینت‌کو - صفحه اصلی',
  meta: [
    { name: 'description', content: 'دجینت‌کو پیشرو در حوزه فناوری و نوآوری دیجیتال' },
  ],
})
</script>
