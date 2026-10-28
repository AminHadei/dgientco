<template>
  <footer class="bg-primary text-primary-foreground">
    <div class="mx-auto max-w-7xl space-y-4 divide-y divide-white/20 p-4 md:p-6">
      <div
        class="flex items-start justify-between gap-x-8 pb-12 text-sm max-lg:flex-col max-lg:items-center max-lg:gap-y-8"
      >
        <div class="space-y-4 max-lg:text-center">
          <h2 class="text-lg font-bold">
            <NuxtLink to="/contact" class="hover:underline">تماس</NuxtLink>
          </h2>
          <address class="not-italic">
            <a
              class="inline-flex items-start gap-x-1 hover:underline max-lg:justify-center"
              :href="companyMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="mt-0.5 size-4 shrink-0"
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
              <span>{{ companyAddress }}</span>
              <span class="sr-only">(باز شدن در زبانه جدید)</span>
            </a>
          </address>
          <p>
            <a :href="`tel:${companyPhoneTel}`" class="hover:underline" dir="ltr">
              {{ companyPhoneDisplay }}
            </a>
            <span class="ms-2">داخلی {{ companyExtensions }}</span>
          </p>
          <p>
            <a :href="`mailto:${companyEmail}`" class="hover:underline" dir="ltr">
              {{ companyEmail }}
            </a>
          </p>
          <MessengerLinks class="max-lg:justify-center" />
        </div>

        <div data-brand="logo-mark" class="shrink-0">
          <BrandLogo variant="mark" large />
        </div>
      </div>

      <div class="flex flex-col gap-1 text-xs uppercase max-lg:items-center">
        <p>{{ siteLegalName }}</p>
        <p>© {{ toPersianDigits(jalaliYear()) }} {{ siteName }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  companyAddress,
  companyEmail,
  companyExtensions,
  companyMapsUrl,
  companyPhoneDisplay,
  companyPhoneTel,
} from "~/data/contact";
import { jalaliYear, toPersianDigits } from "~/utils/jalali";
import { siteLegalName, siteName } from "~/utils/site";
</script>
