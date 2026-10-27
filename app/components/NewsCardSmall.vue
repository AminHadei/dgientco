<template>
  <NuxtLink :to="`/news/${article.slug}`" class="group flex items-start gap-x-4">
    <div class="size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
      <AppImage
        v-if="article.image"
        :src="article.image"
        :alt="article.title"
        class="size-full object-cover"
      />
    </div>
    <div class="min-w-0 flex-1 space-y-2">
      <div v-if="article.date" class="text-sm text-foreground">
        {{ formatJalaliDate(article.date) }}
      </div>
      <h4 class="line-clamp-2 text-sm font-bold leading-snug group-hover:underline">
        {{ article.title }}
      </h4>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatJalaliDate } from "~/utils/jalali";

defineProps<{
  article: {
    slug: string;
    title: string;
    image?: string;
    date?: Date | string;
  };
}>();
</script>
