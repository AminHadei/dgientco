<template>
  <component 
    :is="isExternal ? 'a' : 'NuxtLink'"
    :to="isExternal ? undefined : card.link"
    :href="isExternal ? card.link : undefined"
    class="block bg-white rounded-lg p-8 border-2 border-border hover:border-primary transition-all hover:shadow-lg"
  >
    <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
      <IconPlaceholder :name="card.icon" />
    </div>
    <h3 class="text-xl font-bold mb-3">{{ card.title }}</h3>
    <p class="text-muted-foreground leading-relaxed">{{ card.description }}</p>
  </component>
</template>

<script setup lang="ts">
import type { ContactCard as ContactCardType } from '~/data/contact-cards'

interface Props {
  card: ContactCardType
}

const props = defineProps<Props>()

const isExternal = computed(() => 
  props.card.link.startsWith('http') || 
  props.card.link.startsWith('mailto:') || 
  props.card.link.startsWith('tel:')
)
</script>
