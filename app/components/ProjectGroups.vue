<template>
  <div class="space-y-8">
    <section v-for="group in groups" :key="group.id" class="space-y-4">
      <component :is="nested ? 'h3' : 'h2'" class="text-lg font-bold">
        {{ group.title }}
      </component>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article
          v-for="project in group.items"
          :key="project.title"
          class="space-y-3 rounded-xl bg-secondary p-6 ring-1 ring-foreground/10"
        >
          <span :class="group.id === 'upcoming' ? 'badge-secondary' : 'badge-primary'">
            {{ project.badge }}
          </span>
          <h3 class="text-pretty text-base font-bold leading-relaxed">
            {{ project.title }}
          </h3>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    nested?: boolean;
  }>(),
  { nested: false },
);

type Project = {
  title: string;
  group: "current" | "upcoming";
  badge: string;
};

const { data } = await useAsyncData("projects", () =>
  queryCollection("projects").order("position", "ASC").all(),
);

const projects = computed(() => {
  const items = data.value ?? [];
  return items.filter((item): item is typeof item & Project => {
    return item.group === "current" || item.group === "upcoming";
  });
});

const groups = computed(() => [
  {
    id: "current" as const,
    title: "پروژه‌های جاری",
    items: projects.value.filter((item) => item.group === "current"),
  },
  {
    id: "upcoming" as const,
    title: "پروژه‌های آتی",
    items: projects.value.filter((item) => item.group === "upcoming"),
  },
]);
</script>
