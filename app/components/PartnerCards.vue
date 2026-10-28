<template>
  <div class="partner-marquee -mx-4 overflow-hidden p-0.5 md:-mx-6">
    <div class="partner-marquee-track flex w-max">
      <ul
        v-for="copy in copies"
        :key="copy"
        class="flex items-center gap-4 pe-4"
        :aria-hidden="copy > 0 ? 'true' : undefined"
        :inert="copy > 0"
      >
        <li v-for="partner in partners" :key="`${copy}-${partner.name}`" class="flex">
          <article
            class="flex w-max flex-col items-center gap-4 rounded-xl bg-secondary p-6 ring-1 ring-foreground/10"
          >
            <div class="flex h-32 items-center justify-center">
              <AppImage
                :src="partner.logo"
                alt=""
                class="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </div>
            <h3
              class="h-[52px] text-pretty text-center text-base font-bold leading-relaxed"
            >
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { partners } from "~/data/partners";

const copies = [0, 1, 2];
</script>
