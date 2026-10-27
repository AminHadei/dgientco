<template>
  <div>
    <PageHero title="تماس" :subtitle="siteIntroName" />

    <section>
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-6"
      >
        <article class="rounded-xl bg-secondary p-6 ring-1 ring-foreground/10">
          <h2 class="mb-2 text-base font-semibold">تلفن</h2>
          <a
            :href="`tel:${companyPhoneTel}`"
            class="text-muted-foreground hover:text-primary"
            dir="ltr"
          >
            {{ companyPhoneDisplay }}
          </a>
          <p class="mt-2 text-muted-foreground">داخلی {{ companyExtensions }}</p>
        </article>

        <article class="rounded-xl bg-secondary p-6 ring-1 ring-foreground/10">
          <h2 class="mb-2 text-base font-semibold">ایمیل</h2>
          <a
            :href="`mailto:${companyEmail}`"
            class="text-muted-foreground hover:text-primary"
            dir="ltr"
          >
            {{ companyEmail }}
          </a>
        </article>

        <article class="rounded-xl bg-secondary p-6 ring-1 ring-foreground/10">
          <h2 class="mb-2 text-base font-semibold">نشانی</h2>
          <address class="not-italic text-muted-foreground">
            <a
              :href="companyMapsUrl"
              class="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ companyAddress }}
              <span class="sr-only">(باز شدن در زبانه جدید)</span>
            </a>
          </address>
        </article>

        <article class="rounded-xl bg-secondary p-6 ring-1 ring-foreground/10">
          <h2 class="mb-2 text-base font-semibold">پیام‌رسان</h2>
          <MessengerLinks />
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  companyAddress,
  companyEmail,
  companyExtensions,
  companyMapsUrl,
  companyPhoneDisplay,
  companyPhoneTel,
} from "~/data/contact";
import { siteIntroName, siteName } from "~/utils/site";

usePageSeo({
  title: "تماس",
  description: `نشانی، تلفن و ایمیل ${siteName}.`,
  breadcrumbs: [
    { name: "خانه", path: "/" },
    { name: "تماس", path: "/contact" },
  ],
});
</script>
