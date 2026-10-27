<template>
  <div class="min-h-screen flex items-center justify-center bg-muted">
    <div class="container-custom text-center py-20">
      <div class="max-w-2xl mx-auto">
        <div class="text-8xl md:text-9xl font-black text-primary mb-8">
          {{ error?.statusCode === 404 ? '۴۰۴' : '۵۰۰' }}
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          {{ error?.statusCode === 404 ? 'صفحه پیدا نشد' : 'خطای سرور' }}
        </h1>
        
        <p class="text-lg text-muted-foreground mb-8">
          {{ errorMessage }}
        </p>

        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/" class="btn-primary">
            بازگشت به صفحه اصلی
          </NuxtLink>
          <button @click="handleError" class="btn-secondary">
            تلاش مجدد
          </button>
        </div>

        <!-- Popular Links -->
        <div class="mt-16 pt-16 border-t border-border">
          <h2 class="text-xl font-bold mb-6">صفحات پرکاربرد</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <NuxtLink
              to="/"
              class="p-4 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div class="font-medium">صفحه اصلی</div>
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="p-4 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div class="font-medium">درباره ما</div>
            </NuxtLink>
            <NuxtLink
              to="/news"
              class="p-4 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div class="font-medium">اخبار</div>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="p-4 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div class="font-medium">تماس با ما</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    message: string
  }
}

const props = defineProps<Props>()

const errorMessage = computed(() => {
  if (props.error?.statusCode === 404) {
    return 'صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.'
  }
  return 'متاسفانه خطایی رخ داده است. لطفا دوباره تلاش کنید.'
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: `خطا ${props.error?.statusCode || ''} - دجینت‌کو`,
})
</script>
