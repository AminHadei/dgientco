<template>
  <div>
    <section>
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-6 md:px-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h1 class="page-title">رویدادها</h1>
          <a href="https://example.com/event-kit" class="btn-secondary" target="_blank" rel="noopener noreferrer">کیت رویداد</a>
        </div>
        <p class="max-w-3xl text-muted-foreground">نسل بعدی فناوری و کارآفرینی، همین‌جا در دجینت‌کو شکل می‌گیرد.</p>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl px-4 pb-0 md:px-6">
        <nav class="flex w-full justify-center gap-x-4 border-b pb-4 text-sm font-semibold uppercase" aria-label="بخش‌های رویداد">
          <NuxtLink to="/events" class="underline-offset-8 hover:underline">رویدادهای آینده</NuxtLink>
          <NuxtLink to="/events/spaces" class="underline decoration-2 underline-offset-8">فضاها</NuxtLink>
        </nav>
      </div>
    </section>

    <section class="bg-accent-blue text-white">
      <div class="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div class="max-w-3xl space-y-3">
          <h2 class="text-pretty text-3xl font-black">رویداد خود را در دجینت‌کو برگزار کنید</h2>
          <p class="text-white/90">از جلسه‌های کوچک تا کنفرانس‌های بزرگ، فضاهای پردیس برای میزبانی آماده‌اند.</p>
        </div>
        <a href="https://example.com/book-space" class="btn-light shrink-0" target="_blank" rel="noopener noreferrer">درخواست فضا</a>
      </div>
    </section>

    <section class="py-8">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
        <article v-for="venue in venues" :key="venue.id" class="overflow-hidden rounded-xl border bg-white shadow-sm">
          <div class="grid grid-cols-3 gap-1">
            <div v-for="(image, index) in venue.images" :key="image" class="aspect-video overflow-hidden bg-muted">
              <AppImage :src="image" :alt="`${venue.name}، نمای ${index + 1}`" class="h-full w-full object-cover" />
            </div>
          </div>
          <div class="space-y-3 p-6">
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl font-bold">{{ venue.name }}</h2>
              <span class="text-sm font-bold text-muted-foreground">{{ venue.capacity }}</span>
            </div>
            <p class="leading-relaxed text-muted-foreground">{{ venue.description }}</p>
            <button type="button" class="text-sm font-bold uppercase hover:underline">درخواست این فضا</button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { venues } from '~/data/events'

usePageSeo({
  title: 'فضاهای رویداد',
  description: 'فضاهای رویداد دجینت‌کو برای میزبانی جلسه‌ها، کارگاه‌ها و کنفرانس‌ها.',
})
</script>
