<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="فروش و همکاری"
      subtitle="برای اطلاعات بیشتر درباره محصولات و خدمات یا شروع همکاری با ما تماس بگیرید"
    />

    <!-- Content -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Info -->
          <div>
            <h2 class="text-2xl font-bold mb-6">خدمات ما</h2>
            <div class="space-y-4 mb-8">
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">مشاوره رایگان</h3>
                  <p class="text-muted-foreground">ارزیابی نیازهای شما و ارائه راه‌حل مناسب</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">پیشنهاد قیمت سفارشی</h3>
                  <p class="text-muted-foreground">قیمت‌گذاری منطبق با بودجه و نیاز شما</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">دموی محصول</h3>
                  <p class="text-muted-foreground">آزمایش رایگان محصولات قبل از خرید</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">پشتیبانی اختصاصی</h3>
                  <p class="text-muted-foreground">تیم پشتیبانی اختصاصی برای مشتریان سازمانی</p>
                </div>
              </div>
            </div>

            <div class="bg-muted p-6 rounded-lg">
              <h3 class="font-bold mb-2">تماس مستقیم</h3>
              <p class="text-sm text-muted-foreground mb-3">برای مشاوره فوری با تیم فروش تماس بگیرید</p>
              <div class="space-y-2">
                <a href="tel:+982112345600" class="text-primary hover:underline block" dir="ltr">
                  ۰۲۱-۱۲۳۴۵۶۰۰
                </a>
                <a href="mailto:sales@dgientco.com" class="text-primary hover:underline block">
                  sales@dgientco.com
                </a>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div>
            <h2 class="text-2xl font-bold mb-6">درخواست همکاری</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'فروش و همکاری',
  description: 'درخواست همکاری و اطلاعات فروش دجینت‌کو.',
})
</script>
