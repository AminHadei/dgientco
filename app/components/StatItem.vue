<template>
  <div class="text-center">
    <div class="mb-2 text-3xl font-black md:text-4xl lg:text-5xl">
      {{ value }}
    </div>
    <div class="text-sm opacity-90 md:text-base">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string;
  label: string;
}

defineProps<Props>();
</script>
