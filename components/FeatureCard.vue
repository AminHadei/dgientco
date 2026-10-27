<template>
  <article class="bg-white rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-all hover:shadow-lg">
    <div class="aspect-video bg-muted">
      <img 
        v-if="feature.image" 
        :src="feature.image" 
        :alt="feature.title"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
      <p class="text-muted-foreground leading-relaxed">{{ feature.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Feature } from '~/data/features'

interface Props {
  feature: Feature
}

defineProps<Props>()
</script>
