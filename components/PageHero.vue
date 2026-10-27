<template>
  <section 
    class="relative overflow-hidden"
    :class="[
      fullHeight ? 'min-h-screen' : 'py-20 md:py-32',
      backgroundImage ? 'text-white' : 'bg-muted'
    ]"
  >
    <!-- Background Image -->
    <div v-if="backgroundImage" class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      <img 
        :src="backgroundImage" 
        :alt="title"
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10" :class="{ 'min-h-screen flex flex-col justify-center': fullHeight }">
      <div class="max-w-4xl" :class="{ 'mx-auto text-center': centered }">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" :class="{ 'font-black': displayFont }">
          {{ title }}
        </h1>
        
        <p v-if="subtitle" class="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed" :class="backgroundImage ? 'text-white/90' : 'text-muted-foreground'">
          {{ subtitle }}
        </p>

        <div v-if="$slots.default" class="flex flex-wrap gap-4" :class="{ 'justify-center': centered }">
          <slot />
        </div>

        <div v-if="$slots.stats" class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <slot name="stats" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  backgroundImage?: string
  fullHeight?: boolean
  centered?: boolean
  displayFont?: boolean
}

defineProps<Props>()
</script>
