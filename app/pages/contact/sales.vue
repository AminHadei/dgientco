<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="فروش و همکاری"
      subtitle="برای اطلاعات بیشتر درباره محصولات و خدمات یا شروع همکاری با ما تماس بگیرید"
    />

    <!-- Content -->
    <section class="bg-white py-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- Info -->
          <div>
            <h2 class="mb-6 text-2xl font-bold">خدمات ما</h2>
            <div class="mb-8 space-y-4">
              <div class="flex gap-3">
                <svg
                  class="h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">مشاوره رایگان</h3>
                  <p class="text-muted-foreground">
                    ارزیابی نیازهای شما و ارائه راه‌حل مناسب
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg
                  class="h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">پیشنهاد قیمت سفارشی</h3>
                  <p class="text-muted-foreground">
                    قیمت‌گذاری منطبق با بودجه و نیاز شما
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg
                  class="h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">دموی محصول</h3>
                  <p class="text-muted-foreground">آزمایش رایگان محصولات قبل از خرید</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg
                  class="h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">پشتیبانی اختصاصی</h3>
                  <p class="text-muted-foreground">
                    تیم پشتیبانی اختصاصی برای مشتریان سازمانی
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-muted p-6">
              <h3 class="mb-2 font-bold">تماس مستقیم</h3>
              <p class="mb-3 text-sm text-muted-foreground">
                برای مشاوره فوری با تیم فروش تماس بگیرید
              </p>
              <div class="space-y-2">
                <a
                  href="tel:+982112345600"
                  class="block text-primary hover:underline"
                  dir="ltr"
                >
                  ۰۲۱-۱۲۳۴۵۶۰۰
                </a>
                <a
                  href="mailto:sales@dgientco.com"
                  class="block text-primary hover:underline"
                >
                  sales@dgientco.com
                </a>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div>
            <h2 class="mb-6 text-2xl font-bold">درخواست همکاری</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "فروش و همکاری",
  description: "درخواست همکاری و اطلاعات فروش دجینت‌کو.",
});
</script>
