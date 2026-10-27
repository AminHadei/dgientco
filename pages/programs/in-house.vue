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
          <NuxtLink to="/programs/in-house" class="underline decoration-2 underline-offset-8">برنامه‌های داخلی</NuxtLink>
          <NuxtLink to="/programs/resources" class="underline-offset-8 hover:underline">منابع</NuxtLink>
        </nav>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <p class="text-muted-foreground">برنامه‌های داخلی را تیم دجینت‌کو اجرا می‌کند و کارآفرینان را از ایده تا مقیاس همراهی می‌کند.</p>
      </div>
    </section>

    <section class="bg-muted py-8">
      <div class="mx-auto max-w-7xl space-y-8 px-4 md:px-6">
        <article
          v-for="(program, index) in inHousePrograms"
          :key="program.id"
          class="rounded-lg overflow-hidden border-2 border-border card-hover"
          :class="program.background"
        >
          <div class="p-8 md:p-12">
            <div class="max-w-4xl">
              <!-- Status -->
              <div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
                :class="program.status === 'ثبت‌نام باز است' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                {{ program.status }}
              </div>

              <!-- Name -->
              <h2 class="mb-6 text-pretty text-3xl font-black md:text-4xl">
                {{ program.name }}
              </h2>

              <!-- Description -->
              <p class="text-xl leading-relaxed mb-8">
                {{ program.description }}
              </p>

              <!-- Bullets -->
              <ul class="space-y-3 mb-8">
                <li v-for="(bullet, i) in program.bullets" :key="i" class="flex gap-3">
                  <svg class="w-6 h-6 text-accent-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-lg">{{ bullet }}</span>
                </li>
              </ul>

              <!-- Key Features -->
              <div class="bg-white/50 rounded-lg p-6 mb-8">
                <h3 class="font-black text-lg mb-4 uppercase tracking-wider">ویژگی‌های کلیدی</h3>
                <dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">مخاطبان</dt>
                    <dd class="font-medium">{{ program.keyFeatures.audience }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">مکان</dt>
                    <dd class="font-medium">{{ program.keyFeatures.location }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">فرمت</dt>
                    <dd class="font-medium">{{ program.keyFeatures.format }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">هزینه</dt>
                    <dd class="font-medium">{{ program.keyFeatures.price }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">زبان</dt>
                    <dd class="font-medium">{{ program.keyFeatures.language }}</dd>
                  </div>
                </dl>
              </div>

              <!-- Join Button -->
              <button class="btn-primary">
                درخواست عضویت
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { inHousePrograms } from '~/data/programs'

usePageSeo({
  title: 'برنامه‌های داخلی',
  description: 'برنامه‌های داخلی دجینت‌کو برای بنیان‌گذاران، از ایده تا مقیاس و توسعه.',
})
</script>
