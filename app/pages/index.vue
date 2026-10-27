<template>
  <div>
    <section
      class="relative flex min-h-[max(52rem,calc(100vh-6rem))] w-full flex-col overflow-hidden text-primary-foreground lg:min-h-[max(60rem,calc(100vh-6rem))]"
    >
      <AppImage
        src="/images/unsplash/hero-coworking.webp"
        alt="فضای کاری دجینت‌کو"
        eager
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-primary/40"></div>

      <div
        class="relative z-10 mx-auto flex w-full max-w-7xl grow flex-col gap-y-10 p-4 md:p-6"
      >
        <div
          class="flex shrink-0 grow flex-col justify-center gap-y-10 max-lg:items-center max-lg:text-center lg:max-w-4xl"
        >
          <h1
            class="hero-gradient max-w-full text-pretty text-6xl font-black uppercase leading-[1.25] max-lg:text-center md:text-5xl lg:text-8xl lg:leading-[1.2]"
          >
            بزرگترین پردیس استارت‌آپی خاورمیانه
          </h1>
          <p class="text-xl font-semibold leading-8">
            از ایده تا مقیاس‌پذیری: دجینت‌کو به بیش از ۱۰۰۰ استارت‌آپ دسترسی به اکوسیستم
            پرتاثیر، شبکه شرکای برتر و سرمایه‌گذاران برجسته را فراهم می‌کند.
          </p>
        </div>

        <div class="shrink-0 space-y-10">
          <div class="flex justify-center">
            <div
              class="flex w-full max-w-3xl items-center justify-between gap-x-6 rounded-xl border border-border/40 bg-white/20 px-6 py-4 backdrop-blur-md lg:px-12 lg:py-6"
            >
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex min-w-0 flex-col items-center gap-y-2"
              >
                <span class="text-center text-2xl font-bold lg:text-4xl">{{
                  stat.value
                }}</span>
                <span class="text-center text-sm font-semibold lg:text-base">{{
                  stat.label
                }}</span>
              </div>
            </div>
          </div>
          <div
            class="flex animate-bounce justify-center max-sm:hidden"
            aria-hidden="true"
          >
            <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-y-6 p-4 md:p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="section-title">با افتخار ساخته شده در دجینت‌کو</h2>
          <NuxtLink to="/startups" class="link-more shrink-0">مشاهده بیشتر</NuxtLink>
        </div>
        <p class="text-muted-foreground">
          از پردیس ما تا صحنه جهانی؛ با موفق‌ترین استارت‌آپ‌های دجینت‌کو آشنا شوید.
        </p>
        <LogoCarousel :logos="startupLogos" label="استارت‌آپ‌های دجینت‌کو" />
      </div>
    </section>

    <section class="bg-secondary py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-y-6 p-4 md:p-6">
        <h2 class="section-title">در دجینت‌کو چه به دست می‌آورید</h2>
        <p class="text-muted-foreground">دجینت‌کو یک فضای کار معمولی نیست.</p>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article
            v-for="(feature, index) in features"
            :key="feature.id"
            class="flex gap-x-4 rounded-xl p-4"
            :class="featureTones[index % featureTones.length]"
          >
            <div class="relative size-32 shrink-0 overflow-hidden rounded-xl">
              <AppImage
                :src="feature.image"
                :alt="feature.title"
                class="aspect-square h-full w-full object-cover"
              />
            </div>
            <div class="space-y-3">
              <h3 class="text-pretty text-lg font-bold">{{ feature.title }}</h3>
              <p class="text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-y-6 p-4 text-center md:p-6"
      >
        <h2 class="section-title">همچنین در پردیس حضور دارند</h2>
        <p class="text-muted-foreground">
          این شرکا نیروی انسانی و منابع اختصاصی خود را در پردیس دارند.
        </p>
        <div
          class="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          <div
            v-for="logo in partnerLogos"
            :key="logo.id"
            class="flex h-16 max-w-40 items-center justify-center p-4"
          >
            <span class="text-center text-xs font-bold text-foreground/80">{{
              logo.name
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary py-8">
      <div class="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="section-title">در دجینت‌کو چه می‌گذرد</h2>
          <NuxtLink to="/news" class="link-more shrink-0">مشاهده بیشتر</NuxtLink>
        </div>
        <p class="text-muted-foreground">
          هیچ روزی در پردیس شبیه روز قبل نیست. تازه‌ترین خبرها را بخوانید.
        </p>
        <div class="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NewsCard
            v-for="article in latestNews"
            :key="article.path"
            :article="toNewsCard(article)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { stats } from "~/data/stats";
import { partnerLogos } from "~/data/logos";
import { features } from "~/data/features";
import { startups } from "~/data/startups";
import { toNewsCard } from "~/utils/text";

const featureTones = ["bg-purple-100", "bg-orange-100", "bg-pink-100", "bg-green-100"];

const startupLogos = startups.slice(0, 12).map((startup) => ({
  id: startup.id,
  name: startup.name,
  badge: startup.metric || startup.tag,
}));

const { data: latestNews } = await useAsyncData("home-news", () =>
  queryCollection("news").order("date", "DESC").limit(4).all(),
);

usePageSeo({
  title: "دجینت‌کو",
  description:
    "بزرگترین پردیس استارت‌آپی خاورمیانه. از ایده تا مقیاس‌پذیری در کنار دجینت‌کو.",
  image: "/images/og.webp",
});
</script>
