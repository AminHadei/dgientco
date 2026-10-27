<template>
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
    <a
      :href="companyTelegram"
      class="inline-flex items-center gap-2 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="size-5 text-[#229ED9]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M9.04 15.3 8.9 18.7c.36 0 .52-.16.7-.34l1.68-1.62 3.48 2.56c.64.36 1.1.16 1.26-.6l2.28-10.74c.2-.9-.32-1.26-1.04-.96L4.7 10.3c-.86.34-.84.82-.14 1.04l3.48 1.08 8.08-5.1c.38-.24.72-.1.44.14L9.04 15.3z"
        />
      </svg>
      <span>تلگرام</span>
      <span dir="ltr" class="text-sm">@{{ companyMessengerId }}</span>
      <span class="sr-only">(باز شدن در زبانه جدید)</span>
    </a>
    <a
      :href="companyBale"
      class="inline-flex items-center gap-2 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="size-5 text-[#1f6fbf]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M12 3C6.5 3 2 6.8 2 11.5 2 14.1 3.4 16.4 5.6 17.9L4.5 21l3.6-1.6c1.2.4 2.5.6 3.9.6 5.5 0 10-3.8 10-8.5S17.5 3 12 3z"
        />
      </svg>
      <span>بله</span>
      <span dir="ltr" class="text-sm">@{{ companyMessengerId }}</span>
      <span class="sr-only">(باز شدن در زبانه جدید)</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { companyBale, companyMessengerId, companyTelegram } from "~/data/contact";
</script>
