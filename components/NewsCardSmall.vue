<template>
  <NuxtLink 
    :to="`/news/${article.slug}`"
    class="flex gap-3 group"
  >
    <div class="w-20 h-20 flex-shrink-0 bg-muted rounded overflow-hidden">
      <img 
        v-if="article.image" 
        :src="article.image" 
        :alt="article.title"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="font-medium text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">{{ article.title }}</h4>
      <div v-if="article.date" class="text-xs text-muted-foreground">
        {{ formatJalaliDate(article.date) }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatJalaliDate } from '~/utils/jalali'

interface Article {
  slug: string
  title: string
  image?: string
  date?: Date | string
}

interface Props {
  article: Article
}

defineProps<Props>()
</script>
