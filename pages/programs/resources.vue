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
          <NuxtLink to="/programs" class="underline-offset-8 hover:underline">همه برنامه‌ها</NuxtLink>
          <NuxtLink to="/programs/in-house" class="underline-offset-8 hover:underline">برنامه‌های داخلی</NuxtLink>
          <NuxtLink to="/programs/resources" class="underline decoration-2 underline-offset-8">منابع</NuxtLink>
        </nav>
      </div>
    </section>

    <div>
      <section v-for="(group, groupIndex) in resourceGroups" :key="group.title" class="py-8" :class="groupTones[groupIndex % groupTones.length]">
        <div class="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
          <h2 class="section-title">{{ group.title }}</h2>
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article v-for="resource in group.resources" :key="resource.id" class="flex gap-x-4 rounded-xl bg-white/70 p-4">
              <div class="relative size-32 shrink-0 overflow-hidden rounded-xl">
                <AppImage :src="resource.image" :alt="resource.title" class="aspect-square h-full w-full object-cover" />
              </div>
              <div class="space-y-3">
                <h3 class="text-pretty text-lg font-bold">{{ resource.title }}</h3>
                <p class="text-sm">{{ resource.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { resourceGroups } from '~/data/programs'

const groupTones = ['bg-purple-100', 'bg-orange-100', 'bg-pink-100', 'bg-green-100']

usePageSeo({
  title: 'منابع برنامه‌ها',
  description: 'خدمات و منابعی که کارآفرینان دجینت‌کو برای ساختن کسب‌وکار خود لازم دارند.',
})
</script>
