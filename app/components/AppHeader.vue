<template>
  <header
    class="fixed inset-x-0 top-0 z-50 h-24 w-full bg-primary text-primary-foreground"
  >
    <div
      class="mx-auto flex h-full max-w-7xl items-center justify-between p-4 text-sm md:p-6"
    >
      <NuxtLink to="/" class="inline-flex items-center">
        <BrandLogo variant="mark" eager />
      </NuxtLink>

      <nav
        class="hidden h-full items-center justify-center gap-x-12 uppercase lg:flex"
        aria-label="اصلی"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="font-bold tracking-wider decoration-2 underline-offset-8 hover:underline"
          active-class="underline"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="btn bg-secondary text-primary hover:bg-secondary/80"
        >
          تماس
        </NuxtLink>
      </nav>

      <div class="relative lg:hidden">
        <button
          type="button"
          class="relative z-50 p-2"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav"
          :aria-label="mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="size-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="size-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-transform duration-200"
      enter-from-class="translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition-transform duration-200"
      leave-from-class="translate-y-0"
      leave-to-class="translate-y-full"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav"
        class="fixed inset-0 z-40 mt-24 flex flex-col items-center overflow-y-auto bg-primary text-primary-foreground lg:hidden"
      >
        <nav class="flex w-full flex-col items-center text-lg" aria-label="موبایل">
          <NuxtLink
            v-for="link in mobileLinks"
            :key="link.path"
            :to="link.path"
            class="w-full py-8 text-center font-semibold uppercase tracking-wider"
            :class="route.path === link.path ? 'bg-secondary text-primary' : ''"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>

  <div class="h-24"></div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { path: "/projects", label: "پروژه‌ها" },
  { path: "/news", label: "اخبار" },
  { path: "/about", label: "درباره ما" },
];

const mobileLinks = [
  { path: "/", label: "صفحه اصلی" },
  ...navLinks,
  { path: "/contact", label: "تماس" },
];

watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>
