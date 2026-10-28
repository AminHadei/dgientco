<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <article
      v-for="partner in partners"
      :key="partner.name"
      class="rounded-xl bg-secondary p-6 ring-1 ring-foreground/10"
    >
      <div class="mb-4 flex h-32 items-center justify-center">
        <AppImage
          :src="partner.logo"
          alt=""
          class="h-auto max-h-full w-auto max-w-full object-contain"
        />
      </div>
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
