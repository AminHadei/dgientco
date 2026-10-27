<template>
  <article class="bg-white rounded-lg overflow-hidden border border-border">
    <div class="aspect-video bg-muted">
      <img 
        v-if="item.image" 
        :src="item.image" 
        :alt="item.title"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="p-6">
      <div class="text-3xl font-black text-primary mb-3">{{ item.year }}</div>
      <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
      <p class="text-muted-foreground leading-relaxed">{{ item.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TimelineItem } from '~/data/timeline'

interface Props {
  item: TimelineItem
}

defineProps<Props>()
</script>
