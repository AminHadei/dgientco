<template>
  <div>
    <!-- Hero with Title -->
    <PageHero :title="article?.title || ''" />

    <section class="bg-white">
      <div class="mx-auto max-w-7xl space-y-4 px-4 pb-2 md:px-6">
        <p v-if="article?.summary" class="text-pretty text-xl">{{ article.summary }}</p>
        <p class="text-muted-foreground">
          منتشر شده در {{ article?.date ? formatJalaliDate(article.date) : "" }}
        </p>
      </div>
    </section>

    <section class="bg-white py-8">
      <div class="mx-auto flex max-w-7xl gap-6 px-4 max-lg:flex-col md:px-6">
        <article class="min-w-0 flex-1 space-y-6">
          <div
            v-if="article?.image"
            class="relative aspect-video overflow-hidden rounded-xl bg-muted"
          >
            <AppImage
              :src="article.image || ''"
              :alt="article.title || ''"
              class="absolute inset-0 size-full object-cover"
            />
          </div>

          <div
            class="prose prose-lg prose-headings:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-xl prose-li:mb-2 prose-p:mb-4 prose-p:leading-relaxed prose-ul:mb-4 max-w-none"
          >
            <ContentRenderer v-if="article" :value="article" />
          </div>
        </article>

        <ArticleSidebar :current-slug="slug" class="w-full shrink-0 lg:w-80" />
      </div>
    </section>

    <section class="bg-secondary py-8">
      <div class="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        <h2 class="section-title">اخبار مرتبط</h2>
        <div class="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          <NewsCard
            v-for="related in relatedArticles"
            :key="related.path"
            :article="toNewsCard(related)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { formatJalaliDate } from "~/utils/jalali";
import { asText, toNewsCard } from "~/utils/text";

const route = useRoute();
const slug = route.params.slug as string;

const { data: article } = await useAsyncData(`news-${slug}`, () =>
  queryCollection("news").path(`/news/${slug}`).first(),
);

if (!article.value) {
  throw createError({
    statusCode: 404,
    message: "مقاله پیدا نشد",
  });
}

const { data: relatedArticles } = await useAsyncData(`related-${slug}`, () =>
  queryCollection("news")
    .where("path", "<>", `/news/${slug}`)
    .order("date", "DESC")
    .limit(3)
    .all(),
);

usePageSeo({
  title: article.value?.title || "خبر",
  description: asText(article.value?.summary) || "خبر دجینت‌کو",
  image: asText(article.value?.image),
  type: "article",
});
</script>
