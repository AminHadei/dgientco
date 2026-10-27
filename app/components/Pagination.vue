<template>
  <nav class="flex items-center justify-center gap-2" aria-label="صفحه‌بندی">
    <NuxtLink
      v-if="currentPage > 1"
      :to="getPageUrl(currentPage - 1)"
      class="rounded-lg border border-border px-4 py-2 transition-colors hover:border-primary"
    >
      قبلی
    </NuxtLink>

    <NuxtLink
      v-for="page in pages"
      :key="page"
      :to="getPageUrl(page)"
      class="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors"
      :class="
        page === currentPage
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border hover:border-primary'
      "
    >
      {{ toPersianDigits(page) }}
    </NuxtLink>

    <NuxtLink
      v-if="currentPage < totalPages"
      :to="getPageUrl(currentPage + 1)"
      class="rounded-lg border border-border px-4 py-2 transition-colors hover:border-primary"
    >
      بعدی
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { toPersianDigits } from "~/utils/jalali";

interface Props {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

const props = defineProps<Props>();

const pages = computed(() => {
  const result: number[] = [];
  const showPages = 5;

  let start = Math.max(1, props.currentPage - Math.floor(showPages / 2));
  const end = Math.min(props.totalPages, start + showPages - 1);

  if (end - start < showPages - 1) {
    start = Math.max(1, end - showPages + 1);
  }

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
});

const getPageUrl = (page: number): string => {
  if (page === 1) {
    return props.baseUrl || "/news";
  }
  return `${props.baseUrl || "/news"}/page/${page}`;
};
</script>
