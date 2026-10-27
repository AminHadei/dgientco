<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="بازدید از دفتر"
      subtitle="برای بازدید حضوری از دفتر ما، لطفا وقت قبلی دریافت کنید"
    />

    <!-- Content -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Info -->
          <div>
            <h2 class="text-2xl font-bold mb-6">اطلاعات بازدید</h2>
            <div class="space-y-4 mb-8">
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">ساعات کاری</h3>
                  <p class="text-muted-foreground">شنبه تا چهارشنبه: ۸ صبح تا ۵ عصر</p>
                  <p class="text-muted-foreground">پنج‌شنبه: ۸ صبح تا ۱ ظهر</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">آدرس</h3>
                  <p class="text-muted-foreground">تهران، خیابان ولیعصر، پلاک ۱۲۳۴، طبقه ۵</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">پارکینگ</h3>
                  <p class="text-muted-foreground">پارکینگ رایگان برای بازدیدکنندگان در دسترس است</p>
                </div>
              </div>
              <div class="flex gap-3">
                <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <div>
                  <h3 class="font-medium mb-1">توصیه‌ها</h3>
                  <p class="text-muted-foreground">لطفا حداقل یک روز قبل وقت بگیرید</p>
                  <p class="text-muted-foreground">کارت شناسایی معتبر همراه داشته باشید</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div>
            <h2 class="text-2xl font-bold mb-6">درخواست وقت بازدید</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'بازدید از دفتر - تماس با ما - دجینت‌کو',
  meta: [
    { name: 'description', content: 'درخواست وقت بازدید از دفتر دجینت‌کو' },
  ],
})
</script>
