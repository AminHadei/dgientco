<template>
  <NuxtLink :to="`/news/${article.slug}`" class="group flex gap-3">
    <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-muted">
      <img
        v-if="article.image"
        :src="withBase(baseURL, article.image || '')"
        :alt="article.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="min-w-0 flex-1">
      <h4
        class="mb-1 line-clamp-2 text-sm font-medium transition-colors group-hover:text-primary"
      >
        {{ article.title }}
      </h4>
      <div v-if="article.date" class="text-xs text-muted-foreground">
        {{ formatJalaliDate(article.date) }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatJalaliDate } from "~/utils/jalali";
import { withBase } from "~/utils/withBase";

const baseURL = useRuntimeConfig().app.baseURL;

interface Article {
  slug: string;
  title: string;
  image?: string;
  date?: Date | string;
}

interface Props {
  article: Article;
}

defineProps<Props>();
</script>
