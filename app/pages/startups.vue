<template>
  <div>
    <section>
      <div class="mx-auto max-w-7xl space-y-4 p-4 md:p-6">
        <h1 class="page-title">استارت‌آپ‌ها</h1>
        <p class="max-w-3xl text-muted-foreground">
          جامعه استارت‌آپی دجینت‌کو را ببینید؛ از داستان‌های جهانی تا نام‌های در حال
          رشد.
        </p>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl space-y-6 px-4 py-8 md:px-6 md:py-12">
        <div class="space-y-4">
          <h2 class="section-title">با افتخار ساخته شده در دجینت‌کو</h2>
          <p class="text-muted-foreground">
            از پردیس ما تا صحنه جهانی؛ با شرکت‌هایی آشنا شوید که اینجا ساخته شده‌اند.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="startup in startups"
            :key="startup.id"
            class="flex w-full flex-wrap items-center gap-2.5 rounded-xl border border-border px-3 py-2.5 text-sm transition-colors hover:bg-muted"
          >
            <div
              class="flex h-16 w-36 shrink-0 items-center justify-center self-center overflow-hidden rounded-sm bg-muted text-xl font-black lg:w-32 xl:w-24"
            >
              {{ startup.name.charAt(0) }}
            </div>
            <div class="flex h-full min-w-0 flex-1 flex-col gap-y-3">
              <div class="flex flex-col gap-y-1">
                <h3 class="line-clamp-1 text-xl font-semibold">{{ startup.name }}</h3>
                <p class="text-xs text-muted-foreground">{{ startup.backedBy }}</p>
              </div>
              <p class="line-clamp-3 shrink-0 text-sm leading-normal">
                {{ startup.description }}
              </p>
              <p
                v-if="startup.metric || startup.tag"
                class="text-xs font-semibold text-muted-foreground"
              >
                {{ startup.metric || startup.tag }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-y-6 px-4 text-center md:px-6"
      >
        <h2 class="section-title">سرمایه‌گذاران دجینت‌کو</h2>
        <p class="text-muted-foreground">
          دسترسی به شبکه‌ای از سرمایه‌گذاران فعال در منطقه
        </p>
        <div
          class="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          <div
            v-for="investor in investors"
            :key="investor"
            class="flex h-16 max-w-40 items-center justify-center p-4"
          >
            <span class="text-center text-xs font-bold text-foreground/80">{{
              investor
            }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { startups, investors } from "~/data/startups";

usePageSeo({
  title: "استارت‌آپ‌ها",
  description:
    "آشنایی با استارت‌آپ‌های ساخته‌شده در دجینت‌کو و شبکه سرمایه‌گذاران پردیس.",
});
</script>
