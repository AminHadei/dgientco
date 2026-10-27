<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="بازدید از دفتر"
      subtitle="برای بازدید حضوری از دفتر ما، لطفا وقت قبلی دریافت کنید"
    />

    <!-- Content -->
    <section class="bg-white py-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- Info -->
          <div>
            <h2 class="mb-6 text-2xl font-bold">اطلاعات بازدید</h2>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">ساعات کاری</h3>
                  <p class="text-muted-foreground">شنبه تا چهارشنبه: ۸ صبح تا ۵ عصر</p>
                  <p class="text-muted-foreground">پنج‌شنبه: ۸ صبح تا ۱ ظهر</p>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">آدرس</h3>
                  <p class="text-muted-foreground">
                    تهران، خیابان ولیعصر، پلاک ۱۲۳۴، طبقه ۵
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">پارکینگ</h3>
                  <p class="text-muted-foreground">
                    پارکینگ رایگان برای بازدیدکنندگان در دسترس است
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div>
                  <h3 class="mb-1 font-medium">توصیه‌ها</h3>
                  <p class="text-muted-foreground">لطفا حداقل یک روز قبل وقت بگیرید</p>
                  <p class="text-muted-foreground">
                    کارت شناسایی معتبر همراه داشته باشید
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div>
            <h2 class="mb-6 text-2xl font-bold">درخواست وقت بازدید</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "بازدید از پردیس",
  description: "درخواست وقت بازدید از پردیس دجینت‌کو.",
});
</script>
