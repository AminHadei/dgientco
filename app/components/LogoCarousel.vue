<template>
  <div
    class="relative flex w-full flex-col gap-y-4"
    role="region"
    aria-roledescription="کاروسل"
    :aria-label="label"
  >
    <div ref="emblaRef" class="overflow-hidden">
      <div class="flex">
        <div
          v-for="(logo, index) in logos"
          :key="logo.id"
          class="min-w-0 shrink-0 grow-0 basis-1/2 pe-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          role="group"
          aria-roledescription="اسلاید"
          :aria-label="`${index + 1} از ${logos.length}: ${logo.name}`"
        >
          <div class="rounded-xl border bg-white p-2 shadow-sm">
            <div
              class="flex aspect-square flex-col items-center justify-center gap-2 px-2"
            >
              <div
                class="flex size-16 items-center justify-center rounded-full bg-muted text-2xl font-black text-foreground"
              >
                {{ logo.name.charAt(0) }}
              </div>
              <span class="text-center text-sm font-bold">{{ logo.name }}</span>
              <span
                v-if="logo.badge"
                class="line-clamp-2 text-center text-sm text-muted-foreground"
                >{{ logo.badge }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-2">
      <button
        type="button"
        class="flex size-8 items-center justify-center rounded-lg border bg-white hover:bg-muted disabled:opacity-40"
        :disabled="!canScrollPrev"
        aria-label="اسلاید قبلی"
        @click="scrollPrev"
      >
        <svg
          class="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <button
        type="button"
        class="flex size-8 items-center justify-center rounded-lg border bg-white hover:bg-muted disabled:opacity-40"
        :disabled="!canScrollNext"
        aria-label="اسلاید بعدی"
        @click="scrollNext"
      >
        <svg
          class="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import type { Logo } from "~/data/logos";

interface Props {
  logos: Logo[];
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "لوگوها",
});

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: false,
  direction: "rtl",
  align: "start",
});

const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const updateButtons = () => {
  if (!emblaApi.value) return;
  canScrollPrev.value = emblaApi.value.canScrollPrev();
  canScrollNext.value = emblaApi.value.canScrollNext();
};

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();

watch(emblaApi, (api) => {
  if (!api) return;
  updateButtons();
  api.on("select", updateButtons);
  api.on("reInit", updateButtons);
});

onMounted(updateButtons);
</script>
