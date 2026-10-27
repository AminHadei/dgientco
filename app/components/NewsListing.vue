<template>
  <div>
    <PageHero
      title="اخبار"
      subtitle="تازه‌ترین خبرها، رویدادها و داستان‌های جامعه دجینت‌کو"
    />

    <section>
      <div class="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        <div class="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NewsCard
            v-for="article in articles"
            :key="article.path"
            :article="toNewsCard(article)"
          />
        </div>

        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          base-url="/news"
        />
      </div>
    </section>

    <section class="py-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-6 p-4 text-center md:p-6"
      >
        <h2 class="section-title">رسانه‌های همکار</h2>
        <p class="text-muted-foreground">دجینت‌کو در رسانه‌های معتبر دیده می‌شود.</p>
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
  return page ? parseInt(String(page)) : 1;
});

const itemsPerPage = 6;

const { data: allArticles } = await useAsyncData("news-all", () =>
  queryCollection("news").order("date", "DESC").all(),
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
