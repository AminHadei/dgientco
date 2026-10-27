<template>
  <article class="overflow-hidden rounded-lg border border-border bg-white">
    <div class="aspect-video bg-muted">
      <img
        v-if="item.image"
        :src="item.image"
        :alt="item.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-6">
      <div class="mb-3 text-3xl font-black text-primary">{{ item.year }}</div>
      <h3 class="mb-3 text-xl font-bold">{{ item.title }}</h3>
      <p class="leading-relaxed text-muted-foreground">{{ item.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TimelineItem } from "~/data/timeline";

interface Props {
  item: TimelineItem;
}

defineProps<Props>();
</script>
