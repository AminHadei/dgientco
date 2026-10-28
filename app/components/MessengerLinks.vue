<template>
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
    <a
      :href="companyTelegram"
      class="inline-flex items-center gap-2 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg class="size-6" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#229ED9"
          d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
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
