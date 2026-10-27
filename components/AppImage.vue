<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : 'auto'"
    decoding="async"
  >
</template>

<script setup lang="ts">
import { sizeOf } from '~/utils/images'

const props = defineProps<{
  src: string
  alt: string
  eager?: boolean
}>()

const [width, height] = sizeOf(props.src)
</script>
