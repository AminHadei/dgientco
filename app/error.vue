<template>
  <div class="flex min-h-screen flex-col bg-white">
    <AppHeader />
    <main class="flex flex-1 items-center justify-center">
      <div class="container-custom py-16 text-center">
        <div class="mx-auto max-w-2xl">
          <div class="mb-8 text-8xl font-black text-primary md:text-9xl">
            {{ error?.statusCode === 404 ? "۴۰۴" : "۵۰۰" }}
          </div>

          <h1 class="mb-4 text-3xl font-bold md:text-4xl">
            {{ error?.statusCode === 404 ? "صفحه پیدا نشد" : "خطای سرور" }}
          </h1>

          <p class="mb-8 text-lg text-muted-foreground">
            {{ errorMessage }}
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/" class="btn-primary"> بازگشت به صفحه اصلی </NuxtLink>
            <button class="btn-secondary" @click="handleError">تلاش مجدد</button>
          </div>

          <!-- Popular Links -->
          <div class="mt-16 border-t border-border pt-16">
            <h2 class="mb-6 text-xl font-bold">صفحات پرکاربرد</h2>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
              <NuxtLink
                to="/"
                class="rounded-lg border border-border p-4 transition-colors hover:border-primary"
              >
                <div class="font-medium">صفحه اصلی</div>
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="rounded-lg border border-border p-4 transition-colors hover:border-primary"
              >
                <div class="font-medium">درباره ما</div>
              </NuxtLink>
              <NuxtLink
                to="/news"
                class="rounded-lg border border-border p-4 transition-colors hover:border-primary"
              >
                <div class="font-medium">اخبار</div>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="rounded-lg border border-border p-4 transition-colors hover:border-primary"
              >
                <div class="font-medium">تماس با ما</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number;
    message: string;
  };
}

const props = defineProps<Props>();

const errorMessage = computed(() => {
  if (props.error?.statusCode === 404) {
    return "صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.";
  }
  return "متاسفانه خطایی رخ داده است. لطفا دوباره تلاش کنید.";
});

const handleError = () => clearError({ redirect: "/" });

const isMissing = props.error?.statusCode === 404;

usePageSeo({
  title: isMissing ? "صفحه پیدا نشد" : "خطای سرور",
  description: isMissing
    ? "صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است."
    : "متاسفانه خطایی رخ داده است. لطفا دوباره تلاش کنید.",
  noindex: true,
});
</script>
