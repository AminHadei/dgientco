<template>
  <div class="space-y-8">
    <section v-for="group in groups" :key="group.title" class="space-y-4">
      <h3 class="text-lg font-bold">{{ group.title }}</h3>
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="person in group.people" :key="person.name">
          <article
            class="flex items-center gap-4 rounded-xl bg-secondary p-4 ring-1 ring-foreground/10"
          >
            <span
              class="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-blue-light text-sm font-bold text-accent-blue"
              aria-hidden="true"
            >
              {{ person.initials }}
            </span>
            <div class="min-w-0">
              <p class="font-bold">{{ person.name }}</p>
              <p class="text-sm text-muted-foreground">{{ person.role }}</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { boardMembers, managers } from "~/data/management";

const groups = [
  { title: "اعضای هیئت‌مدیره", people: boardMembers },
  { title: "مدیران", people: managers },
];
</script>
