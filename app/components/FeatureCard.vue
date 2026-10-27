<template>
  <article
    class="overflow-hidden rounded-lg border border-border bg-white transition-all hover:border-foreground/20 hover:shadow-lg"
  >
    <div class="aspect-video bg-muted">
      <img
        v-if="feature.image"
        :src="feature.image"
        :alt="feature.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-6">
      <h3 class="mb-3 text-xl font-bold">{{ feature.title }}</h3>
      <p class="leading-relaxed text-muted-foreground">{{ feature.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Feature } from "~/data/features";

interface Props {
  feature: Feature;
}

defineProps<Props>();
</script>
