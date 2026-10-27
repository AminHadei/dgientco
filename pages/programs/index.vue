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
            برنامه‌های استارت‌آپی دجینت‌کو
          </h1>
          <p class="text-2xl md:text-3xl leading-relaxed text-muted-foreground font-medium">
            بیش از ۳۰ برنامه تخصصی برای هر مرحله از رشد استارت‌آپ شما
          </p>
        </div>

        <!-- Tab Navigation -->
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/programs" class="px-6 py-3 rounded-lg font-bold transition-all bg-primary text-primary-foreground">
            همه برنامه‌ها
          </NuxtLink>
          <NuxtLink to="/programs/in-house" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            برنامه‌های داخلی
          </NuxtLink>
          <NuxtLink to="/programs/resources" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            منابع و خدمات
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Programs Grid -->
    <section class="section-padding bg-muted">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <article
            v-for="program in programs"
            :key="program.id"
            class="bg-white rounded-lg p-6 border-2 border-border card-hover group"
          >
            <!-- Logo placeholder -->
            <div class="w-16 h-16 rounded-lg bg-gradient-radial mb-4 flex items-center justify-center">
              <div class="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
                <span class="text-xl font-black text-accent-blue">
                  {{ program.name.charAt(0) }}
                </span>
              </div>
            </div>

            <!-- Name -->
            <h3 class="text-lg font-black mb-2 group-hover:text-accent-blue transition-colors">
              {{ program.name }}
            </h3>

            <!-- Category -->
            <div class="mb-3">
              <span class="badge badge-secondary text-[10px]">
                {{ program.category }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm text-muted-foreground mb-4 line-clamp-3">
              {{ program.description }}
            </p>

            <!-- Join button -->
            <button class="text-sm font-bold text-accent-blue hover:underline uppercase tracking-wider">
              درخواست عضویت →
            </button>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { programs } from '~/data/programs'

useHead({
  title: 'برنامه‌های استارت‌آپی - دجینت‌کو',
  meta: [
    { name: 'description', content: 'بیش از ۳۰ برنامه تخصصی برای هر مرحله از رشد استارت‌آپ' },
  ],
})
</script>
