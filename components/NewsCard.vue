<template>
  <NuxtLink
    :to="`/news/${article.slug}`"
    class="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
  >
    <div class="aspect-[4/3] bg-muted">
      <AppImage
        v-if="article.image"
        :src="article.image"
        :alt="article.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="space-y-2 p-4">
      <div v-if="article.date" class="text-sm text-muted-foreground">
        {{ formatJalaliDate(article.date) }}
      </div>
      <h3 class="line-clamp-2 text-lg font-bold">{{ article.title }}</h3>
      <p v-if="article.excerpt" class="line-clamp-2 text-sm text-muted-foreground">{{ article.excerpt }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatJalaliDate } from '~/utils/jalali'

defineProps<{
  article: {
    slug: string
    title: string
    excerpt?: string
    image?: string
    date?: Date | string
  }
}>()
</script>
