<template>
  <div>
    <section>
      <div class="mx-auto max-w-7xl space-y-4 px-4 py-6 md:px-6">
        <h1 class="page-title">برنامه‌ها</h1>
        <p class="max-w-3xl text-muted-foreground">هزاران بنیان‌گذار اینجا ساخته‌اند و نوبت شماست. برنامه‌ای را پیدا کنید که با مرحله رشد شما جور باشد.</p>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl px-4 pb-0 md:px-6">
        <nav class="flex w-full justify-center gap-x-4 border-b pb-4 text-sm font-semibold uppercase" aria-label="بخش‌های برنامه">
          <NuxtLink to="/programs" class="underline decoration-2 underline-offset-8">همه برنامه‌ها</NuxtLink>
          <NuxtLink to="/programs/in-house" class="underline-offset-8 hover:underline">برنامه‌های داخلی</NuxtLink>
          <NuxtLink to="/programs/resources" class="underline-offset-8 hover:underline">منابع</NuxtLink>
        </nav>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl space-y-2 px-4 py-6 md:px-6">
        <article
          v-for="program in programs"
          :key="program.id"
          class="flex flex-wrap items-center gap-4 rounded-md p-4 text-sm transition-colors hover:bg-muted sm:gap-x-8"
        >
          <div class="flex h-16 w-28 shrink-0 items-center justify-center rounded-md bg-muted text-xl font-black">
            {{ program.name.charAt(0) }}
          </div>
          <div class="min-w-0 flex-1">
            <h2 class="text-base font-bold">{{ program.name }}</h2>
            <p class="text-muted-foreground">{{ program.description }}</p>
          </div>
          <span class="badge badge-secondary">{{ program.category }}</span>
          <a href="https://example.com/join" class="text-sm font-bold uppercase hover:underline" target="_blank" rel="noopener noreferrer">عضویت</a>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { programs } from '~/data/programs'

usePageSeo({
  title: 'برنامه‌ها',
  description: 'بیش از ۳۰ برنامه تخصصی دجینت‌کو برای هر مرحله از رشد استارت‌آپ.',
})
</script>
