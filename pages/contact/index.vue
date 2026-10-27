<template>
  <div>
    <!-- Hero -->
    <PageHero title="تماس" subtitle="چطور می‌توانیم کمک کنیم؟" />

    <section class="bg-white">
      <div class="container-custom pb-12">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <ContactCard v-for="card in contactCards" :key="card.id" :card="card" />
        </div>
      </div>
    </section>

    <!-- Direct Contact Info -->
    <section class="bg-secondary py-8">
      <div class="container-custom">
        <div class="mb-8 text-center">
          <h2 class="section-title mb-2">اطلاعات تماس</h2>
          <p class="text-lg text-muted-foreground">
            می‌توانید از طریق راه‌های زیر با ما در ارتباط باشید
          </p>
        </div>

        <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center">
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
            >
              <svg
                class="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 class="mb-2 font-bold">تلفن</h3>
            <a
              href="tel:+982112345678"
              class="text-muted-foreground hover:text-primary"
              dir="ltr"
            >
              ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>

          <div class="text-center">
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
            >
              <svg
                class="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="mb-2 font-bold">ایمیل</h3>
            <a
              href="mailto:info@dgientco.com"
              class="text-muted-foreground hover:text-primary"
            >
              info@dgientco.com
            </a>
          </div>

          <div class="text-center">
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
            >
              <svg
                class="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="mb-2 font-bold">آدرس</h3>
            <address class="not-italic text-muted-foreground">
              تهران، خیابان ولیعصر<br />
              پلاک ۱۲۳۴
            </address>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { contactCards } from "~/data/contact-cards";

usePageSeo({
  title: "تماس",
  description: "بازدید، فروش، رسانه و پشتیبانی دجینت‌کو.",
});
</script>
