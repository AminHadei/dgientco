<template>
  <NuxtLink 
    :to="`/news/${article.slug}`"
    class="block bg-white rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-all hover:shadow-lg"
  >
    <div class="aspect-video bg-muted">
      <img 
        v-if="article.image" 
        :src="article.image" 
        :alt="article.title"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="p-6">
      <div v-if="article.date" class="text-sm text-muted-foreground mb-2">
        {{ formatJalaliDate(article.date) }}
      </div>
      <h3 class="text-lg font-bold mb-2 line-clamp-2">{{ article.title }}</h3>
      <p v-if="article.excerpt" class="text-muted-foreground text-sm line-clamp-2">{{ article.excerpt }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatJalaliDate } from '~/utils/jalali'

interface Article {
  slug: string
  title: string
  excerpt?: string
  image?: string
  date?: Date | string
}

interface Props {
  article: Article
}

defineProps<Props>()
</script>
