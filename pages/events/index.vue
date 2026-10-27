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
          <NuxtLink to="/events" class="underline decoration-2 underline-offset-8">رویدادهای آینده</NuxtLink>
          <NuxtLink to="/events/spaces" class="underline-offset-8 hover:underline">فضاها</NuxtLink>
        </nav>
      </div>
    </section>

    <section>
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        <article
          v-for="event in events"
          :key="event.id"
          class="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm"
        >
          <h2 class="text-pretty text-lg font-bold">{{ event.title }}</h2>
          <p class="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{{ formatJalaliDate(event.date) }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ event.timeStart }} تا {{ event.timeEnd }}</span>
          </p>
          <p class="text-sm text-muted-foreground">{{ event.venue }}</p>
          <p v-if="event.description" class="text-sm text-muted-foreground">{{ event.description }}</p>
          <button type="button" class="btn-primary mt-auto w-fit">ثبت‌نام</button>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { events } from '~/data/events'
import { formatJalaliDate } from '~/utils/jalali'

usePageSeo({
  title: 'رویدادها',
  description: 'رویدادهای آینده دجینت‌کو برای جامعه استارت‌آپی، با تاریخ شمسی و محل برگزاری.',
})
</script>
