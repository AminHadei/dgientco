<template>
  <div>
    <!-- Hero with Title -->
    <PageHero :title="article?.title || ''" />

    <!-- Article Content -->
    <section class="bg-white py-12 md:py-20">
      <div class="container-custom">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <!-- Main Content -->
          <article class="lg:col-span-2">
            <!-- Meta Info -->
            <div class="mb-8 border-b border-border pb-8">
              <div class="mb-2 text-muted-foreground">
                منتشر شده در {{ article?.date ? formatJalaliDate(article.date) : "" }}
              </div>
              <p v-if="article?.excerpt" class="text-xl leading-relaxed">
                {{ article.excerpt }}
              </p>
            </div>

            <!-- Cover Image -->
            <div v-if="article?.image" class="mb-8 overflow-hidden rounded-xl">
              <AppImage
                :src="article.image || ''"
                :alt="article.title || ''"
                class="h-auto w-full"
              />
            </div>

            <!-- Article Body -->
            <div
              class="prose prose-lg prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2 max-w-none"
            >
              <ContentRenderer v-if="article" :value="article" />
            </div>
          </article>

          <!-- Sidebar -->
          <ArticleSidebar :current-slug="slug" />
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="bg-muted py-12 md:py-20">
      <div class="container-custom">
        <h2 class="mb-8 text-2xl font-bold md:text-3xl">اخبار مرتبط</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <NewsCard
            v-for="related in relatedArticles"
            :key="related._path"
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
  queryContent(`/news/${slug}`).findOne(),
);

if (!article.value) {
  throw createError({
    statusCode: 404,
    message: "مقاله پیدا نشد",
  });
}

const { data: relatedArticles } = await useAsyncData(`related-${slug}`, () =>
  queryContent("/news")
    .where({ _path: { $ne: `/news/${slug}` } })
    .sort({ date: -1 })
    .limit(3)
    .find(),
);

usePageSeo({
  title: article.value?.title || "خبر",
  description: asText(article.value?.excerpt) || "خبر دجینت‌کو",
  image: asText(article.value?.image),
  type: "article",
});
</script>
