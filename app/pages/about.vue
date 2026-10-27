<template>
  <div>
    <section>
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-6 md:px-6">
        <h1 class="page-title">درباره</h1>
        <p class="text-muted-foreground">
          مدت‌ها قبل از اینکه خانه استارت‌آپ‌ها باشد، دجینت‌کو محلی برای نوآوری بود.
        </p>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-8 md:px-6 md:py-12">
        <h2 class="section-title">دجینت‌کو؛ نوآوری از سال ۱۳۹۵</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <template v-for="(item, index) in timeline" :key="item.year">
            <article class="space-y-4 rounded-xl bg-secondary p-12">
              <div class="space-y-2">
                <h3 class="text-pretty text-3xl font-bold">{{ item.title }}</h3>
                <p class="text-muted-foreground">{{ item.year }}</p>
              </div>
              <p>{{ item.description }}</p>
            </article>
            <div
              class="relative min-h-80 overflow-hidden rounded-xl"
              :class="index === 0 ? 'lg:order-4' : ''"
            >
              <AppImage
                :src="item.image"
                :alt="item.title"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-8 md:px-6">
        <h2 class="section-title">تحول اکوسیستم فناوری</h2>
        <p class="max-w-3xl text-muted-foreground">
          از زمان افتتاح، دجینت‌کو نقش کلیدی در شکل دادن به اکوسیستم فناوری منطقه داشته
          است. با گرد هم آوردن استارت‌آپ‌ها و شرکای نوآوری، این پردیس به خانه‌ای برای
          سازندگان آینده تبدیل شد.
        </p>
      </div>
    </section>

    <section class="relative overflow-hidden">
      <AppImage
        src="/images/unsplash/team-working.webp"
        alt="اصول بنیادی دجینت‌کو"
        class="absolute inset-0 size-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-y-4 px-4 py-8 md:gap-y-8 md:px-6 md:py-12"
      >
        <h2 class="section-title text-primary-foreground">اصول بنیادی</h2>
        <div class="flex w-full max-w-4xl flex-col gap-y-4 font-semibold text-white">
          <p
            class="flex min-h-30 w-full max-w-3xl items-center justify-center rounded-xl bg-white/30 p-6 text-center backdrop-blur-md"
          >
            ایده‌های عالی به‌تنهایی کافی نیستند. اجرا، سرعت و محیط مناسب تفاوت را
            می‌سازند.
          </p>
          <p
            class="flex min-h-30 w-full max-w-3xl items-center justify-center self-end rounded-xl bg-white/30 p-6 text-center backdrop-blur-md"
          >
            در دجینت‌کو شرط‌های جسورانه را زود حمایت می‌کنیم، موانع را کنار می‌زنیم و به
            بنیان‌گذاران کمک می‌کنیم روی آنچه مهم است تمرکز کنند.
          </p>
          <p
            class="flex min-h-30 w-full max-w-3xl items-center justify-center rounded-xl bg-white/30 p-6 text-center backdrop-blur-md"
          >
            این فقط یک پردیس نیست؛ سکوی پرتاب کسانی است که آینده را می‌سازند.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { timeline } from "~/data/timeline";

usePageSeo({
  title: "درباره",
  description:
    "داستان دجینت‌کو، از یک بنای تاریخی تا بزرگترین پردیس استارت‌آپی خاورمیانه.",
});
</script>
