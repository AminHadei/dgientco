<template>
  <div class="text-center">
    <div class="text-3xl md:text-4xl lg:text-5xl font-black mb-2">
      {{ value }}
    </div>
    <div class="text-sm md:text-base opacity-90">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string
  label: string
}

defineProps<Props>()
</script>
