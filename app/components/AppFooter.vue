<template>
  <footer class="bg-primary text-primary-foreground">
    <div class="mx-auto max-w-7xl space-y-4 divide-y divide-white/20 p-4 md:p-6">
      <div
        class="flex justify-between gap-x-4 pb-12 text-sm max-lg:flex-col max-lg:gap-y-4"
      >
        <div class="space-y-6">
          <div class="flex flex-col items-start gap-y-4 max-lg:items-center">
            <span class="text-xl font-black tracking-tight">دجینت‌کو</span>
            <span>بزرگترین پردیس استارت‌آپی خاورمیانه</span>
            <a
              class="flex items-center gap-x-1 hover:underline"
              href="https://maps.google.com/?q=Tehran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z"
                />
                <circle cx="12" cy="10" r="2.5" stroke-width="2" />
              </svg>
              تهران، خیابان ولیعصر، پلاک ۱۲۳۴
            </a>
          </div>
          <div class="flex flex-col gap-y-4 max-lg:items-center">
            <h2 class="text-lg font-bold">ما را دنبال کنید</h2>
            <div class="flex items-center gap-x-4">
              <a
                href="https://instagram.com"
                class="hover:opacity-80"
                aria-label="اینستاگرام"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 4.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.2-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 9.2A2.8 2.8 0 1114.8 12 2.8 2.8 0 0112 9.2z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                class="hover:opacity-80"
                aria-label="لینکدین"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4.98 3.5A2.5 2.5 0 107.5 6a2.5 2.5 0 00-2.52-2.5zM3.5 8.5h3V21h-3zM9.5 8.5h2.9v1.7h.1a3.2 3.2 0 012.9-1.6c3.1 0 3.7 2 3.7 4.7V21h-3v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-3z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com"
                class="hover:opacity-80"
                aria-label="ایکس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M14.7 10.3L22 2h-2.2l-6.2 7.1L8.4 2H2l7.7 11.1L2 22h2.2l6.8-7.8L15.4 22H22l-7.3-11.7zM12.1 13l-.8-1.1L5.2 3.5h2.7l5 7.1.8 1.1 6.6 9.3h-2.7z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-y-2 max-lg:items-center">
          <h2 class="text-lg font-bold">
            <NuxtLink to="/contact" class="hover:underline">تماس</NuxtLink>
          </h2>
        </div>

        <div
          class="flex w-full max-w-xs flex-col gap-y-3 max-lg:mx-auto max-lg:items-center"
        >
          <h2 class="text-lg font-bold">خبرنامه</h2>
          <form class="w-full space-y-3" @submit.prevent="handleNewsletterSubmit">
            <label class="sr-only" for="newsletter-email">ایمیل</label>
            <input
              id="newsletter-email"
              v-model="newsletterEmail"
              type="email"
              name="email"
              required
              placeholder="ایمیل"
              autocomplete="email"
              class="h-8 w-full rounded-lg border border-white/30 bg-transparent px-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            />
            <label class="flex items-start gap-2 text-xs text-primary-foreground/80">
              <input
                v-model="newsletterConsent"
                type="checkbox"
                required
                class="mt-0.5"
              />
              <span>با دریافت خبرنامه موافقم</span>
            </label>
            <button
              type="submit"
              class="btn w-full bg-secondary text-primary hover:bg-secondary/80"
            >
              عضویت
            </button>
            <p v-if="newsletterMessage" role="status" class="text-xs">
              {{ newsletterMessage }}
            </p>
          </form>
        </div>
      </div>

      <div
        class="flex items-center justify-between text-xs uppercase max-lg:flex-col max-lg:gap-y-2"
      >
        <div class="flex items-center gap-x-4 max-lg:flex-col max-lg:gap-y-2">
          <NuxtLink to="/legal-information" class="hover:underline"
            >اطلاعات قانونی</NuxtLink
          >
          <NuxtLink to="/privacy-policy" class="hover:underline">حریم خصوصی</NuxtLink>
          <NuxtLink to="/terms" class="hover:underline">شرایط استفاده</NuxtLink>
        </div>
        <p>© {{ toPersianDigits(1403) }} دجینت‌کو</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { toPersianDigits } from "~/utils/jalali";

const newsletterEmail = ref("");
const newsletterConsent = ref(false);
const newsletterMessage = ref("");

const handleNewsletterSubmit = () => {
  newsletterEmail.value = "";
  newsletterConsent.value = false;
  newsletterMessage.value = "عضویت شما ثبت شد.";
};
</script>
