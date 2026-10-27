<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-primary text-primary-foreground">
    <nav class="container-custom h-24 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 font-bold text-xl">
        <div class="w-10 h-10 bg-primary-foreground text-primary rounded-lg flex items-center justify-center text-2xl">
          د
        </div>
        <span>دجینت‌کو</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-base hover:text-primary-foreground/80 transition-colors"
          active-class="font-medium"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        :aria-label="mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-transform duration-300"
      enter-from-class="translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition-transform duration-300"
      leave-from-class="translate-y-0"
      leave-to-class="translate-y-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 top-24 bg-primary z-40 overflow-y-auto"
      >
        <div class="container-custom py-8 flex flex-col gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="text-2xl font-medium hover:text-primary-foreground/80 transition-colors py-3"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
  
  <!-- Spacer for fixed header -->
  <div class="h-24"></div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'صفحه اصلی' },
  { path: '/about', label: 'درباره ما' },
  { path: '/news', label: 'اخبار' },
  { path: '/contact', label: 'تماس با ما' },
]

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
