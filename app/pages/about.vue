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
            <article class="space-y-4 rounded-xl bg-secondary p-8 md:p-12">
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

    <section class="bg-accent-orange">
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-12 md:px-6 md:py-16">
        <h2 class="section-title">اصول بنیادی</h2>
        <div class="max-w-3xl space-y-4 text-lg leading-relaxed">
          <p>
            ایده‌های عالی به‌تنهایی کافی نیستند. اجرا، سرعت و محیط مناسب تفاوت را
            می‌سازند.
          </p>
          <p>
            در دجینت‌کو شرط‌های جسورانه را زود حمایت می‌کنیم، موانع را کنار می‌زنیم و به
            بنیان‌گذاران کمک می‌کنیم روی آنچه مهم است تمرکز کنند.
          </p>
          <p>این فقط یک پردیس نیست؛ سکوی پرتاب کسانی است که آینده را می‌سازند.</p>
        </div>
        <NuxtLink to="/contact" class="btn-primary mt-4">شروع کنید</NuxtLink>
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
