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
            منابع و خدمات
          </h1>
          <p class="text-2xl md:text-3xl leading-relaxed text-muted-foreground font-medium">
            دسترسی به مجموعه کامل منابع، خدمات و ابزارهای مورد نیاز برای رشد استارت‌آپ شما
          </p>
        </div>

        <!-- Tab Navigation -->
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/programs" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            همه برنامه‌ها
          </NuxtLink>
          <NuxtLink to="/programs/in-house" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            برنامه‌های داخلی
          </NuxtLink>
          <NuxtLink to="/programs/resources" class="px-6 py-3 rounded-lg font-bold transition-all bg-primary text-primary-foreground">
            منابع و خدمات
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Resource Groups -->
    <section class="section-padding bg-muted">
      <div class="container-custom space-y-20">
        <div v-for="group in resourceGroups" :key="group.title">
          <!-- Group Title -->
          <div class="mb-12">
            <h2 class="text-display text-display-md">
              {{ group.title }}
            </h2>
          </div>

          <!-- Resources Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article
              v-for="resource in group.resources"
              :key="resource.id"
              class="bg-white rounded-lg overflow-hidden border-2 border-border card-hover group"
            >
              <!-- Image -->
              <div class="aspect-video overflow-hidden bg-muted">
                <img 
                  :src="resource.image" 
                  :alt="resource.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-lg font-black mb-3 group-hover:text-accent-blue transition-colors">
                  {{ resource.title }}
                </h3>
                <p class="text-sm text-muted-foreground">
                  {{ resource.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { resourceGroups } from '~/data/programs'

useHead({
  title: 'منابع و خدمات - دجینت‌کو',
  meta: [
    { name: 'description', content: 'دسترسی به منابع و خدمات مورد نیاز برای رشد استارت‌آپ' },
  ],
})
</script>
