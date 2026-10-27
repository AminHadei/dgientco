<template>
  <div>
    <section class="bg-white py-8">
      <article class="container-custom max-w-4xl">
        <h1 class="page-title mb-4">{{ page?.title }}</h1>
        <div v-if="page?.lastUpdated" class="mb-8 text-muted-foreground">
          آخرین به‌روزرسانی: {{ formatJalaliDate(page.lastUpdated) }}
        </div>
        <div
          class="prose prose-lg prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2 max-w-none"
        >
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { formatJalaliDate } from "~/utils/jalali";
import { siteName } from "~/utils/site";

const { data: page } = await useAsyncData("legal-information", () =>
  queryCollection("legal").path("/legal/legal-information").first(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    message: "صفحه پیدا نشد",
  });
}

usePageSeo({
  title: page.value?.title || "اطلاعات قانونی",
  description: `اطلاعات قانونی ${siteName}.`,
  breadcrumbs: [
    { name: "خانه", path: "/" },
    { name: page.value?.title || "اطلاعات قانونی", path: "/legal-information" },
  ],
});
</script>
