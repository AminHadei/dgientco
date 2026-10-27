<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="اخبار"
      subtitle="تازه‌ترین خبرها، رویدادها و داستان‌های جامعه دجینت‌کو"
    >
      <NuxtLink to="/contact/press" class="btn-secondary"> کیت رسانه </NuxtLink>
    </PageHero>

    <section class="bg-white">
      <div class="container-custom pb-12">
        <div class="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NewsCard
            v-for="article in articles"
            :key="article._path"
            :article="toNewsCard(article)"
          />
        </div>

        <!-- Pagination -->
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          base-url="/news"
        />
      </div>
    </section>

    <!-- Press Section -->
    <section class="bg-secondary py-8">
      <div class="container-custom">
        <div class="mb-8 text-center">
          <h2 class="section-title mb-2">رسانه‌های همکار</h2>
          <p class="text-lg text-muted-foreground">دجینت‌کو در رسانه‌ها</p>
        </div>
        <LogoGrid :logos="pressLogos" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { toNewsCard } from "~/utils/text";
import { pressLogos } from "~/data/logos";

const route = useRoute();
const currentPage = computed(() => {
  const page = route.params.page;
  return page ? parseInt(page as string) : 1;
});

const itemsPerPage = 6;

const { data: allArticles } = await useAsyncData("news-all", () =>
  queryContent("/news").sort({ date: -1 }).find(),
);

const totalPages = computed(() =>
  Math.ceil((allArticles.value?.length || 0) / itemsPerPage),
);

const articles = computed(() => {
  if (!allArticles.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allArticles.value.slice(start, end);
});

usePageSeo({
  title: currentPage.value > 1 ? `اخبار - صفحه ${currentPage.value}` : "اخبار",
  description: "آخرین اخبار، رویدادها و داستان‌های موفقیت دجینت‌کو.",
});
</script>
