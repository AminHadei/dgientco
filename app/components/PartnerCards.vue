<template>
  <div class="flex flex-wrap gap-4">
    <article
      v-for="partner in partners"
      :key="partner.name"
      class="flex w-max flex-col items-center gap-4 rounded-xl bg-secondary p-6 ring-1 ring-foreground/10"
    >
      <div class="flex h-32 items-center justify-center">
        <AppImage
          :src="partner.logo"
          alt=""
          class="h-auto max-h-full w-auto max-w-full object-contain"
        />
      </div>
      <h3 class="h-[52px] text-pretty text-center text-base font-bold leading-relaxed">
        <a
          v-if="partner.href"
          :href="partner.href"
          class="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span v-for="line in partner.lines" :key="line" class="block">{{
            line
          }}</span>
          <span class="sr-only">(باز شدن در زبانه جدید)</span>
        </a>
        <template v-else>
          <span v-for="line in partner.lines" :key="line" class="block">{{
            line
          }}</span>
        </template>
      </h3>
    </article>
  </div>
</template>

<script setup lang="ts">
import { partners } from "~/data/partners";
</script>
