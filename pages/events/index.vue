<template>
  <div>
    <!-- Hero with Event Kit Button and Tabs -->
    <section class="section-padding bg-white border-b border-border">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div class="max-w-3xl">
            <div class="inline-block mb-6">
              <span class="badge badge-primary">رویدادها</span>
            </div>
            <h1 class="text-display text-display-xl mb-8">
              رویدادهای دجینت‌کو
            </h1>
            <p class="text-2xl leading-relaxed text-muted-foreground font-medium">
              به جامعه فعال استارت‌آپی بپیوندید و در رویدادهای هفتگی شرکت کنید
            </p>
          </div>
          <button class="btn-secondary shrink-0">
            دریافت کیت رویداد
          </button>
        </div>

        <!-- Tab Navigation -->
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/events" class="px-6 py-3 rounded-lg font-bold transition-all bg-primary text-primary-foreground">
            رویدادهای آینده
          </NuxtLink>
          <NuxtLink to="/events/spaces" class="px-6 py-3 rounded-lg font-bold transition-all bg-muted text-foreground hover:bg-primary hover:text-primary-foreground">
            فضاهای رویداد
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Events List -->
    <section class="section-padding bg-muted">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto space-y-6">
          <article
            v-for="event in events"
            :key="event.id"
            class="bg-white rounded-lg p-8 border-2 border-border card-hover"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div class="flex-1">
                <!-- Title -->
                <h3 class="text-2xl font-black mb-3">
                  {{ event.title }}
                </h3>

                <!-- Date and Time -->
                <div class="flex flex-wrap gap-4 text-muted-foreground mb-2">
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="font-medium">{{ formatJalaliDate(event.date) }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-medium">{{ event.timeStart }} - {{ event.timeEnd }}</span>
                  </div>
                </div>

                <!-- Venue -->
                <div class="flex items-center gap-2 text-muted-foreground mb-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="font-medium">{{ event.venue }}</span>
                </div>

                <!-- Description -->
                <p v-if="event.description" class="text-muted-foreground">
                  {{ event.description }}
                </p>
              </div>

              <!-- Register Button -->
              <div class="flex-shrink-0">
                <button class="btn-primary">
                  ثبت‌نام
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { events } from '~/data/events'
import { formatJalaliDate } from '~/utils/jalali'

useHead({
  title: 'رویدادها - دجینت‌کو',
  meta: [
    { name: 'description', content: 'رویدادهای هفتگی دجینت‌کو برای جامعه استارت‌آپی' },
  ],
})
</script>
