<template>
  <section>
    <div class="mx-auto max-w-7xl space-y-4 px-4 py-6 md:px-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <h1 class="page-title">{{ title }}</h1>
        <div v-if="$slots.default" class="flex flex-wrap gap-3">
          <slot />
        </div>
      </div>
      <p v-if="subtitle" class="max-w-3xl text-muted-foreground">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
  centered?: boolean;
  displayFont?: boolean;
}>();
</script>
