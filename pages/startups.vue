<template>
  <div>
    <section>
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-6 md:px-6">
        <h1 class="page-title">استارت‌آپ‌ها</h1>
        <p class="max-w-3xl text-muted-foreground">جامعه استارت‌آپی دجینت‌کو را ببینید؛ از داستان‌های جهانی تا نام‌های در حال رشد.</p>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl space-y-6 px-4 py-8 md:px-6 md:py-12">
        <div class="space-y-4">
          <h2 class="section-title">با افتخار ساخته شده در دجینت‌کو</h2>
          <p class="text-muted-foreground">از پردیس ما تا صحنه جهانی؛ با شرکت‌هایی آشنا شوید که اینجا ساخته شده‌اند.</p>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="startup in startups"
            :key="startup.id"
            class="flex flex-wrap items-center gap-4 rounded-xl border p-4 text-sm"
          >
            <div class="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-muted text-2xl font-black">
              {{ startup.name.charAt(0) }}
            </div>
            <div class="min-w-0 flex-1 space-y-1">
              <h3 class="text-base font-bold">{{ startup.name }}</h3>
              <p class="text-xs uppercase tracking-wide text-muted-foreground">{{ startup.backedBy }}</p>
              <p class="text-muted-foreground">{{ startup.description }}</p>
            </div>
            <span
              v-if="startup.metric || startup.tag"
              class="rounded-full bg-muted px-3 py-1 text-xs font-bold"
            >
              {{ startup.metric || startup.tag }}
            </span>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-accent-blue text-white">
      <div class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-pretty text-3xl font-black md:text-4xl">{{ featuredProgram.title }}</h2>
          <p class="text-lg leading-relaxed text-white/90">{{ featuredProgram.description }}</p>
          <NuxtLink to="/programs" class="btn-light">مشاهده برنامه‌ها</NuxtLink>
        </div>
        <div class="overflow-hidden rounded-xl">
          <AppImage :src="featuredProgram.image" :alt="featuredProgram.title" class="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section class="py-8">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-y-6 px-4 text-center md:px-6">
        <h2 class="section-title">سرمایه‌گذاران دجینت‌کو</h2>
        <p class="text-muted-foreground">دسترسی به شبکه‌ای از سرمایه‌گذاران فعال در منطقه</p>
        <div class="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          <div v-for="investor in investors" :key="investor" class="flex h-16 max-w-40 items-center justify-center p-2">
            <span class="text-center text-xs font-bold text-foreground/80">{{ investor }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { startups, featuredProgram, investors } from '~/data/startups'

usePageSeo({
  title: 'استارت‌آپ‌ها',
  description: 'آشنایی با استارت‌آپ‌های ساخته‌شده در دجینت‌کو و شبکه سرمایه‌گذاران پردیس.',
})
</script>
