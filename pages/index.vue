<template>
  <div>
    <!-- Hero Section -->
    <PageHero
      title="پیشرو در تحول دیجیتال"
      subtitle="دجینت‌کو با ارائه راهکارهای نوآورانه فناوری، همراه شما در مسیر رشد و موفقیت است"
      background-image="/images/hero-home.jpg"
      full-height
      centered
      display-font
    >
      <button class="btn-primary">
        شروع همکاری
      </button>
      <button class="btn-secondary">
        بیشتر بدانید
      </button>

      <template #stats>
        <StatItem
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
        />
      </template>
    </PageHero>

    <!-- Logo Carousel Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">همکاران ما</h2>
          <p class="text-muted-foreground text-lg">مورد اعتماد برندهای برتر کشور</p>
        </div>
        <LogoCarousel :logos="carouselLogos" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-muted">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">خدمات ما</h2>
          <p class="text-muted-foreground text-lg">راهکارهای جامع برای تحول دیجیتال سازمان شما</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            v-for="feature in features"
            :key="feature.id"
            :feature="feature"
          />
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">شرکای ما</h2>
          <p class="text-muted-foreground text-lg">با بهترین‌ها در کنار هم</p>
        </div>
        <LogoGrid :logos="partnerLogos" />
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="py-20 bg-muted">
      <div class="container-custom">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-2">آخرین اخبار</h2>
            <p class="text-muted-foreground text-lg">جدیدترین رویدادها و اخبار دجینت‌کو</p>
          </div>
          <NuxtLink to="/news" class="btn-secondary">
            همه اخبار
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            v-for="article in latestNews"
            :key="article.slug"
            :article="article"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { stats } from '~/data/stats'
import { carouselLogos, partnerLogos } from '~/data/logos'
import { features } from '~/data/features'

// Mock latest news - will be replaced with actual content
const latestNews = [
  {
    slug: 'new-ai-platform',
    title: 'رونمایی از پلتفرم هوش مصنوعی جدید',
    excerpt: 'دجینت‌کو با معرفی پلتفرم هوش مصنوعی خود، گامی بزرگ در راستای نوآوری برداشت',
    image: '/images/feature-1.jpg',
    date: '2024-10-20',
  },
  {
    slug: 'partnership-announcement',
    title: 'شراکت استراتژیک با شرکت پارس',
    excerpt: 'امضای تفاهم‌نامه همکاری با یکی از بزرگترین شرکت‌های فناوری کشور',
    image: '/images/feature-2.jpg',
    date: '2024-10-15',
  },
  {
    slug: 'innovation-award',
    title: 'دریافت جایزه نوآوری ملی',
    excerpt: 'دجینت‌کو برنده جایزه نوآوری در جشنواره ملی فناوری شد',
    image: '/images/feature-3.jpg',
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
