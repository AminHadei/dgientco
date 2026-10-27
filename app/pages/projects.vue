<template>
  <div>
    <PageHero title="پروژه‌ها" subtitle="پروژه‌های جاری و آتی فنصاد." />

    <section class="py-8">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <ProjectGroups />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteName } from "~/utils/site";

usePageSeo({
  title: "پروژه‌ها",
  description: `پروژه‌های جاری و آتی ${siteName}.`,
  breadcrumbs: [
    { name: "خانه", path: "/" },
    { name: "پروژه‌ها", path: "/projects" },
  ],
});
</script>
