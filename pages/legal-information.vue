<template>
  <div>
    <section class="py-12 md:py-20 bg-white">
      <article class="container-custom max-w-4xl">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ page?.title }}</h1>
        <div v-if="page?.lastUpdated" class="text-muted-foreground mb-8">
          آخرین به‌روزرسانی: {{ formatJalaliDate(page.lastUpdated) }}
        </div>
        <div class="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2">
          <ContentRenderer :value="page" />
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { formatJalaliDate } from '~/utils/jalali'

const { data: page } = await useAsyncData('legal-information', () =>
  queryContent('/legal/legal-information').findOne()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    message: 'صفحه پیدا نشد'
  })
}

useHead({
  title: `${page.value?.title} - دجینت‌کو`,
})
</script>
