<template>
  <div>
    <!-- Hero with Title -->
    <PageHero
      :title="article?.title || ''"
    />

    <!-- Article Content -->
    <section class="py-12 md:py-20 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <article class="lg:col-span-2">
            <!-- Meta Info -->
            <div class="mb-8 pb-8 border-b border-border">
              <div class="text-muted-foreground mb-2">
                منتشر شده در {{ article?.date ? formatJalaliDate(article.date) : '' }}
              </div>
              <p v-if="article?.excerpt" class="text-xl leading-relaxed">
                {{ article.excerpt }}
              </p>
            </div>

            <!-- Cover Image -->
            <div v-if="article?.image" class="mb-8 overflow-hidden rounded-xl">
              <AppImage
                :src="article.image"
                :alt="article.title"
                class="h-auto w-full"
              />
            </div>

            <!-- Article Body -->
            <div class="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2">
              <ContentRenderer :value="article" />
            </div>
          </article>

          <!-- Sidebar -->
          <ArticleSidebar :current-slug="slug" />
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="py-12 md:py-20 bg-muted">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">اخبار مرتبط</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            v-for="related in relatedArticles"
            :key="related._path"
            :article="{
              slug: related._path?.split('/').pop() || '',
              title: related.title,
              excerpt: related.excerpt,
              image: related.image,
              date: related.date,
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { formatJalaliDate } from '~/utils/jalali'

const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData(`news-${slug}`, () =>
  queryContent(`/news/${slug}`).findOne()
)

if (!article.value) {
  throw createError({
    statusCode: 404,
    message: 'مقاله پیدا نشد'
  })
}

const { data: relatedArticles } = await useAsyncData(`related-${slug}`, () =>
  queryContent('/news')
    .where({ _path: { $ne: `/news/${slug}` } })
    .sort({ date: -1 })
    .limit(3)
    .find()
)

usePageSeo({
  title: article.value?.title || 'خبر',
  description: article.value?.excerpt || 'خبر دجینت‌کو',
  image: article.value?.image,
  type: 'article',
})
</script>
