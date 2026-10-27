<template>
  <div>
    <!-- Hero -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl">
          <div class="inline-block mb-6">
            <span class="badge badge-primary">استارت‌آپ‌های ما</span>
          </div>
          <h1 class="text-display text-display-xl mb-8">
            با افتخار ساخته شده در دجینت‌کو
          </h1>
          <p class="text-2xl md:text-3xl leading-relaxed text-muted-foreground font-medium">
            از پردیس ما به صحنه جهانی - آشنایی با استارت‌آپ‌های موفق دجینت‌کو که صنایع مختلف را متحول می‌کنند
          </p>
        </div>
      </div>
    </section>

    <!-- Startups Grid -->
    <section class="section-padding bg-muted">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <article
            v-for="startup in startups"
            :key="startup.id"
            class="bg-white rounded-lg p-6 border-2 border-border card-hover"
          >
            <!-- Logo placeholder -->
            <div class="w-16 h-16 rounded-lg bg-gradient-radial mb-4 flex items-center justify-center">
              <div class="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
                <span class="text-xl font-black text-accent-blue">
                  {{ startup.name.charAt(0) }}
                </span>
              </div>
            </div>

            <!-- Name -->
            <h3 class="text-lg font-black mb-2">{{ startup.name }}</h3>

            <!-- Backed by -->
            <div class="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-medium">
              {{ startup.backedBy }}
            </div>

            <!-- Description -->
            <p class="text-sm text-muted-foreground mb-4 line-clamp-2">
              {{ startup.description }}
            </p>

            <!-- Metric badge -->
            <div v-if="startup.metric" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              :class="startup.metric === 'یونیکورن' ? 'bg-accent-blue text-white' : 'bg-muted text-muted-foreground'">
              {{ startup.metric }}
            </div>

            <!-- Tag -->
            <div v-if="startup.tag && !startup.metric" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-muted text-muted-foreground">
              {{ startup.tag }}
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured Program Section -->
    <section class="section-padding bg-accent-blue text-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-display text-display-lg mb-6">
              {{ featuredProgram.title }}
            </h2>
            <p class="text-xl leading-relaxed mb-8 opacity-90">
              {{ featuredProgram.description }}
            </p>
            <NuxtLink :to="featuredProgram.link" class="btn-primary bg-white text-accent-blue hover:bg-white/90">
              مشاهده برنامه‌ها
            </NuxtLink>
          </div>
          <div class="rounded-lg overflow-hidden">
            <img 
              :src="featuredProgram.image" 
              :alt="featuredProgram.title"
              class="w-full h-full object-cover"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Investors Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="badge badge-primary">سرمایه‌گذاران</span>
          </div>
          <h2 class="text-display text-display-lg mb-6">
            شبکه سرمایه‌گذاران دجینت‌کو
          </h2>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            دسترسی به بیش از ۷۰۰ سرمایه‌گذار فعال از سراسر منطقه
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <div 
            v-for="(investor, index) in investors"
            :key="index"
            class="bg-muted rounded-lg p-6 flex items-center justify-center aspect-square card-hover border border-border"
          >
            <div class="text-center">
              <div class="w-12 h-12 rounded-full bg-white mx-auto mb-2 flex items-center justify-center">
                <span class="text-lg font-black text-accent-blue">
                  {{ investor.charAt(0) }}
                </span>
              </div>
              <div class="text-xs font-bold text-muted-foreground line-clamp-2">
                {{ investor }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { startups, featuredProgram, investors } from '~/data/startups'

useHead({
  title: 'استارت‌آپ‌های ما - دجینت‌کو',
  meta: [
    { name: 'description', content: 'آشنایی با استارت‌آپ‌های موفق ساخته شده در دجینت‌کو' },
  ],
})
</script>
