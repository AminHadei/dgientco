<template>
  <div>
    <!-- Hero with Tabs -->
    <section class="section-padding bg-white border-b border-border">
      <div class="container-custom">
        <div class="max-w-4xl mb-12">
          <div class="inline-block mb-6">
            <span class="badge badge-primary">برنامه‌ها</span>
          </div>
          <h1 class="text-display text-display-xl mb-8">
            برنامه‌های داخلی دجینت‌کو
          </h1>
          <p class="text-2xl md:text-3xl leading-relaxed text-muted-foreground font-medium">
            برنامه‌های اختصاصی طراحی شده و اجرا شده توسط تیم دجینت‌کو
          </p>
        </div>

        <!-- Tab Navigation -->
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/programs" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            همه برنامه‌ها
          </NuxtLink>
          <NuxtLink to="/programs/in-house" class="px-6 py-3 rounded-lg font-bold transition-all bg-primary text-primary-foreground">
            برنامه‌های داخلی
          </NuxtLink>
          <NuxtLink to="/programs/resources" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            منابع و خدمات
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- In-House Programs -->
    <section class="section-padding bg-muted">
      <div class="container-custom space-y-8">
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
              <h2 class="text-display text-display-md mb-6">
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

useHead({
  title: 'برنامه‌های داخلی - دجینت‌کو',
  meta: [
    { name: 'description', content: 'برنامه‌های اختصاصی طراحی شده توسط دجینت‌کو' },
  ],
})
</script>
