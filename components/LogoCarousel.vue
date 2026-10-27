<template>
  <div class="relative">
    <div class="overflow-hidden" ref="emblaRef">
      <div class="flex gap-8">
        <div 
          v-for="logo in logos"
          :key="logo.id"
          class="flex-[0_0_280px] md:flex-[0_0_320px]"
        >
          <div class="bg-white rounded-lg p-8 border border-border hover:border-foreground/20 transition-all hover:shadow-lg">
            <div class="aspect-video flex items-center justify-center mb-4 bg-muted rounded">
              <span class="text-sm font-medium text-muted-foreground">{{ logo.name }}</span>
            </div>
            <div v-if="logo.badge" class="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
              {{ logo.badge }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="scrollPrev"
      class="absolute top-1/2 -translate-y-1/2 end-full me-4 w-12 h-12 rounded-full bg-white border-2 border-border hover:border-foreground/40 flex items-center justify-center transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!canScrollPrev"
      aria-label="قبلی"
    >
      <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button
      @click="scrollNext"
      class="absolute top-1/2 -translate-y-1/2 start-full ms-4 w-12 h-12 rounded-full bg-white border-2 border-border hover:border-foreground/40 flex items-center justify-center transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!canScrollNext"
      aria-label="بعدی"
    >
      <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import type { Logo } from '~/data/logos'

interface Props {
  logos: Logo[]
}

defineProps<Props>()

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  direction: 'rtl',
  align: 'start',
})

const canScrollPrev = ref(false)
const canScrollNext = ref(false)

const updateButtons = () => {
  if (!emblaApi.value) return
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
}

const scrollPrev = () => {
  emblaApi.value?.scrollPrev()
}

const scrollNext = () => {
  emblaApi.value?.scrollNext()
}

watch(emblaApi, (api) => {
  if (!api) return
  
  updateButtons()
  api.on('select', updateButtons)
  api.on('reInit', updateButtons)
})

onMounted(() => {
  updateButtons()
})
</script>
