<template>
  <div>
    <section>
      <div class="mx-auto max-w-7xl space-y-4 p-4 md:p-6">
        <h1 class="page-title">درباره</h1>
        <p class="text-lg font-semibold">{{ siteIntroName }}</p>
        <p class="max-w-3xl text-muted-foreground">{{ siteMission }}</p>
      </div>
    </section>

    <section id="management" class="py-8">
      <div class="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        <h2 class="section-title">مدیران شرکت</h2>
        <ManagementList />
      </div>
    </section>

    <section class="bg-secondary py-8">
      <div class="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        <h2 class="section-title">شرکای سازمانی</h2>
        <PartnerCards />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteIntroName, siteMission, siteName } from "~/utils/site";

usePageSeo({
  title: "درباره",
  description: `ماموریت، مدیران و شرکای ${siteName}.`,
  breadcrumbs: [
    { name: "خانه", path: "/" },
    { name: "درباره", path: "/about" },
  ],
});
</script>
