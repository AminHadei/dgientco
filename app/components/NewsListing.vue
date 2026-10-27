<template>
  <div>
    <PageHero
      title="اخبار"
      subtitle="این خبرها نمونه هستند و به‌زودی با اخبار فنصاد جایگزین می‌شوند."
    />

    <section>
      <div class="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        <h2 class="sr-only">فهرست اخبار</h2>
        <div class="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NewsCard
            v-for="(article, index) in articles"
            :key="article.path"
            :article="toNewsCard(article)"
            :eager="index === 0"
          />
        </div>

        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          base-url="/news"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { toNewsCard } from "~/utils/text";
import { newsDescription, newsPageSize } from "~/utils/site";

const route = useRoute();
const currentPage = computed(() => {
  const page = route.params.page;
  return page ? parseInt(String(page)) : 1;
});

const itemsPerPage = newsPageSize;

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

const firstImage = articles.value[0] ? toNewsCard(articles.value[0]).image : undefined;
if (firstImage) useLcpImage(firstImage);

usePageSeo({
  title: currentPage.value > 1 ? `اخبار - صفحه ${currentPage.value}` : "اخبار",
  description: newsDescription,
  breadcrumbs: [
    { name: "خانه", path: "/" },
    { name: "اخبار", path: "/news" },
  ],
});
</script>
