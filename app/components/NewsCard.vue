<template>
  <NuxtLink
    :to="`/news/${article.slug}`"
    class="flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
  >
    <div class="relative aspect-square shrink-0 overflow-hidden bg-muted">
      <AppImage
        v-if="article.image"
        :src="article.image"
        :alt="article.title"
        class="absolute inset-0 size-full object-cover"
      />
      <div
        class="absolute inset-x-0 bottom-0 flex flex-col gap-y-1.5 bg-primary/60 p-2 text-primary-foreground"
      >
        <span v-if="article.date" class="text-xs">{{
          formatJalaliDate(article.date)
        }}</span>
        <h3 class="line-clamp-2 text-base font-semibold leading-snug">
          {{ article.title }}
        </h3>
        <p v-if="article.excerpt" class="line-clamp-2 text-xs leading-5">
          {{ article.excerpt }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { formatJalaliDate } from "~/utils/jalali";

defineProps<{
  article: {
    slug: string;
    title: string;
    excerpt?: string;
    image?: string;
    date?: Date | string;
  };
}>();
</script>
