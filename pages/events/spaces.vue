<template>
  <div>
    <!-- Hero with Event Kit Button and Tabs -->
    <section class="section-padding bg-white border-b border-border">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div class="max-w-3xl">
            <div class="inline-block mb-6">
              <span class="badge badge-primary">فضاهای رویداد</span>
            </div>
            <h1 class="text-display text-display-xl mb-8">
              میزبان رویداد خود باشید
            </h1>
            <p class="text-2xl leading-relaxed text-muted-foreground font-medium">
              دجینت‌کو بیش از ۱۰ فضای رویداد منحصربه‌فرد برای هر نوع رویداد ارائه می‌دهد
            </p>
          </div>
          <button class="btn-secondary shrink-0">
            دریافت کیت رویداد
          </button>
        </div>

        <!-- Tab Navigation -->
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/events" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            رویدادهای آینده
          </NuxtLink>
          <NuxtLink to="/events/spaces" class="px-6 py-3 rounded-lg font-bold transition-all bg-primary text-primary-foreground">
            فضاهای رویداد
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Host CTA -->
    <section class="section-padding bg-accent-blue text-white">
      <div class="container-custom text-center">
        <h2 class="text-display text-display-lg mb-6">
          رویداد خود را در دجینت‌کو برگزار کنید
        </h2>
        <p class="text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
          فضاهای ما با تمام امکانات مورد نیاز برای رویدادهای موفق مجهز شده‌اند. از جلسات کوچک تا کنفرانس‌های بزرگ، ما شما را پوشش می‌دهیم.
        </p>
        <button class="btn-primary bg-white text-accent-blue hover:bg-white/90">
          درخواست فضا
        </button>
      </div>
    </section>

    <!-- Venues -->
    <section class="section-padding bg-muted">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            v-for="venue in venues"
            :key="venue.id"
            class="bg-white rounded-lg overflow-hidden border-2 border-border card-hover"
          >
            <!-- Images Gallery -->
            <div class="grid grid-cols-3 gap-1">
              <div 
                v-for="(image, index) in venue.images"
                :key="index"
                class="aspect-video overflow-hidden bg-muted"
              >
                <img 
                  :src="image" 
                  :alt="`${venue.name} ${index + 1}`"
                  class="w-full h-full object-cover"
                >
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Name and Capacity -->
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-black">
                  {{ venue.name }}
                </h3>
                <div class="flex items-center gap-2 text-muted-foreground">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="font-bold">{{ venue.capacity }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-muted-foreground leading-relaxed mb-4">
                {{ venue.description }}
              </p>

              <!-- Request Button -->
              <button class="text-sm font-bold text-accent-blue hover:underline uppercase tracking-wider">
                درخواست این فضا →
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { venues } from '~/data/events'

useHead({
  title: 'فضاهای رویداد - دجینت‌کو',
  meta: [
    { name: 'description', content: 'فضاهای رویداد دجینت‌کو برای میزبانی رویدادهای شما' },
  ],
})
</script>
