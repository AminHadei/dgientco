<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
    <div 
      v-for="logo in logos"
      :key="logo.id"
      class="flex items-center justify-center"
    >
      <div class="w-full aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground p-4 border border-border hover:border-foreground/20 transition-colors">
        <div class="text-center">
          <div class="text-xs font-medium">{{ logo.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Logo } from '~/data/logos'

interface Props {
  logos: Logo[]
}

defineProps<Props>()
</script>
