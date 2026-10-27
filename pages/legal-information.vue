<template>
  <div>
    <section class="bg-white py-12 md:py-20">
      <article class="container-custom max-w-4xl">
        <h1 class="mb-4 text-3xl font-bold md:text-4xl">{{ page?.title }}</h1>
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

const { data: page } = await useAsyncData("legal-information", () =>
  queryContent("/legal/legal-information").findOne(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    message: "صفحه پیدا نشد",
  });
}

usePageSeo({
  title: page.value?.title || "اطلاعات قانونی",
  description: "اطلاعات قانونی دجینت‌کو.",
});
</script>
