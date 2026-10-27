<template>
  <component
    :is="isExternal ? 'a' : 'NuxtLink'"
    :to="isExternal ? undefined : card.link"
    :href="isExternal ? card.link : undefined"
    class="flex flex-col gap-4 rounded-xl border bg-secondary px-6 py-6 shadow-sm transition-colors hover:bg-muted"
  >
    <h3 class="flex items-center gap-2 text-base font-semibold">
      <IconPlaceholder :name="card.icon" />
      {{ card.title }}
    </h3>
    <p class="flex-1 text-sm leading-relaxed text-muted-foreground">{{ card.description }}</p>
    <span class="text-sm font-bold uppercase">ادامه</span>
  </component>
</template>

<script setup lang="ts">
import type { ContactCard as ContactCardType } from '~/data/contact-cards'

const props = defineProps<{
  card: ContactCardType
}>()

const isExternal = computed(() =>
  props.card.link.startsWith('http')
  || props.card.link.startsWith('mailto:')
  || props.card.link.startsWith('tel:'),
)
</script>
