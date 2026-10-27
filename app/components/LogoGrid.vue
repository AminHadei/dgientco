<template>
  <div
    class="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6"
  >
    <div
      v-for="logo in logos"
      :key="logo.id"
      class="flex h-16 max-w-40 items-center justify-center p-4"
    >
      <span class="text-center text-xs font-bold text-foreground/80">{{
        logo.name
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Logo } from "~/data/logos";

defineProps<{
  logos: Logo[];
}>();
</script>
