<template>
  <nav class="flex items-center justify-center gap-2" aria-label="صفحه‌بندی">
    <NuxtLink
      v-if="currentPage > 1"
      :to="getPageUrl(currentPage - 1)"
      class="px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
    >
      قبلی
    </NuxtLink>

    <NuxtLink
      v-for="page in pages"
      :key="page"
      :to="getPageUrl(page)"
      class="w-10 h-10 rounded-lg flex items-center justify-center border transition-colors"
      :class="page === currentPage ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary'"
    >
      {{ toPersianDigits(page) }}
    </NuxtLink>

    <NuxtLink
      v-if="currentPage < totalPages"
      :to="getPageUrl(currentPage + 1)"
      class="px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
    >
      بعدی
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { toPersianDigits } from '~/utils/jalali'

interface Props {
  currentPage: number
  totalPages: number
  baseUrl?: string
}

const props = defineProps<Props>()

const pages = computed(() => {
  const result: number[] = []
  const showPages = 5
  
  let start = Math.max(1, props.currentPage - Math.floor(showPages / 2))
  let end = Math.min(props.totalPages, start + showPages - 1)
  
  if (end - start < showPages - 1) {
    start = Math.max(1, end - showPages + 1)
  }
  
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  
  return result
})

const getPageUrl = (page: number): string => {
  if (page === 1) {
    return props.baseUrl || '/news'
  }
  return `${props.baseUrl || '/news'}/page/${page}`
}
</script>
