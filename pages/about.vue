<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="درباره دجینت‌کو"
      subtitle="ما با هدف ایجاد تحول در صنعت فناوری اطلاعات ایران و ارائه راهکارهای نوآورانه به کسب‌وکارها آغاز به کار کردیم"
    >
      <NuxtLink to="/contact" class="btn-primary">
        با ما همکاری کنید
      </NuxtLink>
    </PageHero>

    <!-- Story Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">داستان ما</h2>
          <div class="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              دجینت‌کو در سال ۱۳۹۵ با هدف ایجاد تحولی بنیادین در صنعت فناوری اطلاعات ایران تاسیس شد. 
              ما باور داریم که فناوری می‌تواند نقش کلیدی در رشد و توسعه کسب‌وکارها ایفا کند.
            </p>
            <p>
              امروز با بیش از ۲۰۰ متخصص حرفه‌ای، به بیش از ۵۰۰ شرکت و سازمان در سراسر کشور خدمات می‌دهیم
              و افتخار همکاری با برترین برندهای داخلی و بین‌المللی را داریم.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-20 bg-muted">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">مسیر رشد ما</h2>
          <p class="text-muted-foreground text-lg">نگاهی به مهم‌ترین دستاوردهای دجینت‌کو</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TimelineCard
            v-for="item in timeline"
            :key="item.year"
            :item="item"
          />
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">اصول و ارزش‌های ما</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-bold mb-2">نوآوری مستمر</h3>
                <p class="text-muted-foreground leading-relaxed">
                  ما همواره به دنبال راه‌حل‌های جدید و خلاقانه برای چالش‌های فناوری هستیم و با استفاده از
                  آخرین دستاوردهای علم و فناوری، بهترین خدمات را ارائه می‌دهیم.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">کیفیت بالا</h3>
                <p class="text-muted-foreground leading-relaxed">
                  کیفیت محصولات و خدمات ما در اولویت قرار دارد. ما با استانداردهای بین‌المللی کار می‌کنیم
                  و همواره به دنبال بهبود و ارتقای کیفیت هستیم.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">مشتری‌مداری</h3>
                <p class="text-muted-foreground leading-relaxed">
                  رضایت مشتریان ما مهم‌ترین معیار موفقیت است. ما به صدای مشتریان گوش می‌دهیم و
                  راهکارهای متناسب با نیازهای آن‌ها ارائه می‌دهیم.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">تعهد به اخلاق</h3>
                <p class="text-muted-foreground leading-relaxed">
                  ما به اصول اخلاقی در کسب‌وکار پایبند هستیم و با صداقت، شفافیت و مسئولیت‌پذیری
                  با همکاران و مشتریان خود رفتار می‌کنیم.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src="/images/timeline-1.jpg" 
                alt="تیم دجینت‌کو"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary text-primary-foreground">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">آماده همکاری با ما هستید؟</h2>
        <p class="text-xl mb-8 text-primary-foreground/90">
          با تیم ما تماس بگیرید و پروژه بعدی خود را شروع کنید
        </p>
        <NuxtLink to="/contact" class="btn-secondary">
          تماس با ما
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
