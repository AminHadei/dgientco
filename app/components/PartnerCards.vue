<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <article
      v-for="partner in partners"
      :key="partner.name"
      class="rounded-xl bg-secondary p-6 ring-1 ring-foreground/10"
    >
      <h3 class="text-pretty text-base font-bold leading-relaxed">
        <a
          v-if="partner.href"
          :href="partner.href"
          class="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ partner.name }}
          <span class="sr-only">(باز شدن در زبانه جدید)</span>
        </a>
        <template v-else>{{ partner.name }}</template>
      </h3>
    </article>
  </div>
</template>

<script setup lang="ts">
import { partners } from "~/data/partners";
</script>
