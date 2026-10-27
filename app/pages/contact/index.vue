<template>
  <div>
    <PageHero title="تماس" subtitle="چطور می‌توانیم کمک کنیم؟" />

    <section class="py-8">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-8 md:px-6"
      >
        <article class="rounded-xl bg-secondary p-6">
          <h2 class="mb-2 text-base font-semibold">تلفن</h2>
          <a
            href="tel:+982112345678"
            class="text-muted-foreground hover:text-primary"
            dir="ltr"
          >
            ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
        </article>

        <article class="rounded-xl bg-secondary p-6">
          <h2 class="mb-2 text-base font-semibold">ایمیل</h2>
          <a
            href="mailto:info@dgientco.com"
            class="block text-muted-foreground hover:text-primary"
          >
            info@dgientco.com
          </a>
          <a
            href="mailto:support@dgientco.com"
            class="mt-2 block text-muted-foreground hover:text-primary"
          >
            support@dgientco.com
          </a>
        </article>

        <article class="rounded-xl bg-secondary p-6">
          <h2 class="mb-2 text-base font-semibold">آدرس</h2>
          <address class="not-italic text-muted-foreground">
            تهران، خیابان ولیعصر<br />
            پلاک ۱۲۳۴
          </address>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "تماس",
  description: "تلفن، ایمیل و نشانی دفتر دجینت‌کو.",
});
</script>
