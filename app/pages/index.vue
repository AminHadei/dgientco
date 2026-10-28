<template>
  <div>
    <section
      class="relative flex min-h-[max(52rem,calc(100vh-6rem))] w-full flex-col overflow-hidden text-primary-foreground lg:min-h-[max(60rem,calc(100vh-6rem))]"
    >
      <AppImage
        src="/images/unsplash/hero-coworking.webp"
        :srcset="heroSrcset"
        sizes="100vw"
        alt="پس‌زمینه صفحه اصلی"
        eager
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-primary/40"></div>

      <div
        class="relative z-10 mx-auto flex w-full max-w-7xl grow flex-col gap-y-10 p-4 md:p-6"
      >
        <div
          class="flex shrink-0 grow flex-col justify-center gap-y-6 max-lg:items-center max-lg:text-center lg:max-w-4xl"
        >
          <div class="text-lg font-semibold">{{ siteIntroName }}</div>
          <h1
            class="hero-gradient max-w-full text-pretty text-4xl font-black leading-[1.35] max-lg:text-center md:text-5xl lg:text-6xl lg:leading-[1.3]"
          >
            {{ `${heroTitleLines[0]} ` }}<br />{{ heroTitleLines[1] }}
          </h1>
          <p class="text-xl font-semibold leading-8">
            {{ siteMission }}
          </p>
        </div>

        <div class="shrink-0 space-y-10">
          <div class="flex justify-center">
            <div
              class="grid w-full max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-4 rounded-xl border border-border/40 bg-white/20 px-6 py-4 backdrop-blur-md lg:grid-cols-4 lg:px-12 lg:py-6"
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

    <section class="below-fold py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-y-6 p-4 md:p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="section-title">پروژه‌ها</h2>
          <NuxtLink to="/projects" class="link-more shrink-0">مشاهده بیشتر</NuxtLink>
        </div>
        <ProjectGroups nested />
      </div>
    </section>

    <section class="below-fold bg-secondary py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-y-6 p-4 md:p-6">
        <h2 class="section-title">شرکای سازمانی</h2>
        <PartnerCards />
      </div>
    </section>

    <section class="below-fold py-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-y-6 p-4 md:p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="section-title">مدیران شرکت</h2>
          <NuxtLink to="/about" class="link-more shrink-0">مشاهده بیشتر</NuxtLink>
        </div>
        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="person in people" :key="person.name" class="text-sm">
            <span class="font-bold">{{ person.name }}</span>
            <span class="text-muted-foreground"> — {{ person.role }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="below-fold bg-secondary py-8">
      <div class="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="section-title">اخبار</h2>
          <NuxtLink to="/news" class="link-more shrink-0">مشاهده بیشتر</NuxtLink>
        </div>
        <p class="text-muted-foreground">
          این خبرها نمونه هستند و به‌زودی با اخبار فنصاد جایگزین می‌شوند.
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
import { people } from "~/data/management";
import { partners } from "~/data/partners";
import { toPersianDigits } from "~/utils/jalali";
import {
  heroTitle,
  heroTitleLines,
  siteIntroName,
  siteMission,
  siteName,
} from "~/utils/site";
import { toNewsCard } from "~/utils/text";

const { data: projectDocs } = await useAsyncData("home-projects", () =>
  queryCollection("projects").all(),
);

const stats = computed(() => {
  const docs = projectDocs.value ?? [];
  const current = docs.filter((item) => item.group === "current").length;
  const upcoming = docs.filter((item) => item.group === "upcoming").length;
  return [
    { value: toPersianDigits(current), label: "پروژه جاری" },
    { value: toPersianDigits(upcoming), label: "پروژه آتی" },
    { value: toPersianDigits(partners.length), label: "شریک سازمانی" },
    { value: toPersianDigits(people.length), label: "هیئت‌مدیره و مدیران" },
  ];
});

const { data: latestNews } = await useAsyncData("home-news", () =>
  queryCollection("news").order("date", "DESC").limit(4).all(),
);

const heroSrcset =
  "/images/unsplash/hero-coworking-960.webp 960w, /images/unsplash/hero-coworking.webp 1920w";

useLcpImage("/images/unsplash/hero-coworking-960.webp", heroSrcset);

usePageSeo({
  title: heroTitle,
  description: siteMission,
  image: "/images/og.png",
  imageAlt: siteName,
  home: true,
});
</script>
