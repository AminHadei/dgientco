<template>
  <div>
    <!-- Hero -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl">
          <div class="inline-block mb-6">
            <span class="badge badge-primary">درباره ما</span>
          </div>
          <h1 class="text-display text-display-xl mb-8">
            درباره
          </h1>
          <p class="text-2xl md:text-3xl leading-relaxed text-muted-foreground font-medium">
            مدت‌ها قبل از اینکه خانه استارت‌آپ‌ها باشد، دجینت‌کو از قبل محلی برای نوآوری بود.
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="section-padding bg-muted">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <article
            v-for="item in timeline"
            :key="item.year"
            class="space-y-6"
          >
            <div class="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover"
              >
            </div>
            <div>
              <div class="text-5xl md:text-6xl font-black text-accent-blue mb-4">
                {{ item.year }}
              </div>
              <h3 class="text-2xl font-black mb-4">{{ item.title }}</h3>
              <p class="text-muted-foreground leading-relaxed">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Ecosystem Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="text-display text-display-md mb-8">
            تحول اکوسیستم فناوری ایران
          </h2>
          <div class="prose prose-lg prose-stone max-w-none">
            <p class="text-xl leading-relaxed text-muted-foreground mb-6">
              از زمان افتتاح، دجینت‌کو نقش کلیدی در تغییر شکل اکوسیستم فناوری ایران داشته است. قبل از آن، چشم‌انداز استارت‌آپی در ایران پراکنده، منزوی و تا حد زیادی ناشناخته بود.
            </p>
            <p class="text-xl leading-relaxed text-muted-foreground">
              با گرد هم آوردن برترین استارت‌آپ‌ها و شرکای نوآوری پیشرو، دجینت‌کو به سرعت به یک مرکز اصلی برای فناوری در منطقه تبدیل شد. امروز، دجینت‌کو میزبان بزرگترین جامعه استارت‌آپی هوش مصنوعی در خاورمیانه است.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="section-padding bg-accent-orange">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h2 class="text-display text-display-md mb-8">
            اصول بنیادی
          </h2>
          <div class="prose prose-lg prose-stone max-w-none space-y-6">
            <p class="text-xl leading-relaxed">
              ایده‌های عالی هرگز کافی نیستند. آنچه تفاوت ایجاد می‌کند، اجرا، سرعت و محیط مناسب است. در دجینت‌کو، ما به کارآفرینان آنچه را که برای رفتن به جلو و سریع‌تر نیاز دارند، می‌دهیم.
            </p>
            <p class="text-xl leading-relaxed">
              ما شرط‌های جسورانه را زود حمایت می‌کنیم، موانع را پاک می‌کنیم و به بنیان‌گذاران کمک می‌کنیم تا روی آنچه واقعاً اهمیت دارد تمرکز کنند.
            </p>
            <p class="text-xl leading-relaxed">
              این فقط یک پردیس نیست. این یک سکوی پرتاب، یک منطقه آزمایش و خانه‌ای برای کسانی است که آینده را می‌سازند.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary text-primary-foreground">
      <div class="container-custom text-center">
        <h2 class="text-display text-display-lg mb-8">آماده ساختن آینده هستید؟</h2>
        <p class="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          با تیم ما تماس بگیرید و بخشی از اکوسیستم نوآوری دجینت‌کو شوید
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-primary hover:bg-white/90">
          شروع کنید
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { timeline } from '~/data/timeline'

useHead({
  title: 'درباره ما - دجینت‌کو',
  meta: [
    { name: 'description', content: 'داستان، مسیر رشد و ارزش‌های دجینت‌کو' },
  ],
})
</script>
