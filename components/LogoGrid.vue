<template>
  <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
    <div v-for="logo in logos" :key="logo.id" class="flex items-center justify-center">
      <div
        class="flex aspect-video w-full items-center justify-center rounded-lg border border-border bg-muted p-4 text-muted-foreground transition-colors hover:border-foreground/20"
      >
        <div class="text-center">
          <div class="text-xs font-medium">{{ logo.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Logo } from "~/data/logos";

interface Props {
  logos: Logo[];
}

defineProps<Props>();
</script>
