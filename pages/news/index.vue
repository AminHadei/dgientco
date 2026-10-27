<template>
  <div>
    <!-- Hero -->
    <PageHero
      title="اخبار و رویدادها"
      subtitle="جدیدترین اخبار، رویدادها و دستاوردهای دجینت‌کو"
    >
      <NuxtLink to="/contact/press" class="btn-primary">
        تماس با بخش رسانه
      </NuxtLink>
    </PageHero>

    <!-- News Grid -->
    <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <NewsCard
            v-for="article in articles"
            :key="article._path"
            :article="{
              slug: article._path?.split('/').pop() || '',
              title: article.title,
              excerpt: article.excerpt,
              image: article.image,
              date: article.date,
            }"
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
    <section class="py-20 bg-muted">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">رسانه‌های همکار</h2>
          <p class="text-muted-foreground text-lg">دجینت‌کو در رسانه‌ها</p>
        </div>
        <LogoGrid :logos="pressLogos" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { pressLogos } from '~/data/logos'

const route = useRoute()
const currentPage = computed(() => {
  const page = route.params.page
  return page ? parseInt(page as string) : 1
})

const itemsPerPage = 6

const { data: allArticles } = await useAsyncData('news-all', () =>
  queryContent('/news')
    .sort({ date: -1 })
    .find()
)

const totalPages = computed(() => 
  Math.ceil((allArticles.value?.length || 0) / itemsPerPage)
)

const articles = computed(() => {
  if (!allArticles.value) return []
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allArticles.value.slice(start, end)
})

useHead({
  title: `اخبار${currentPage.value > 1 ? ` - صفحه ${currentPage.value}` : ''} - دجینت‌کو`,
  meta: [
    { name: 'description', content: 'آخرین اخبار و رویدادهای دجینت‌کو' },
  ],
})
</script>
