<template>
  <aside class="space-y-8">
    <!-- Share -->
    <div class="rounded-lg bg-muted p-6">
      <h3 class="mb-4 text-lg font-bold">اشتراک‌گذاری</h3>
      <div class="flex gap-2">
        <button
          class="flex-1 rounded-lg bg-white p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="اشتراک در توییتر"
          @click="share('twitter')"
        >
          <svg class="mx-auto h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </button>
        <button
          class="flex-1 rounded-lg bg-white p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="اشتراک در لینکدین"
          @click="share('linkedin')"
        >
          <svg class="mx-auto h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </button>
        <button
          class="flex-1 rounded-lg bg-white p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="اشتراک در تلگرام"
          @click="share('telegram')"
        >
          <svg class="mx-auto h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- More News -->
    <div v-if="(moreNews || []).length > 0">
      <h3 class="mb-4 text-lg font-bold">اخبار بیشتر</h3>
      <div class="space-y-4">
        <NewsCardSmall
          v-for="article in moreNews || []"
          :key="article.path"
          :article="toNewsCard(article)"
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { toNewsCard } from "~/utils/text";
interface Props {
  currentSlug: string;
}

const props = defineProps<Props>();

const { data: moreNews } = await useAsyncData("more-news", () =>
  queryCollection("news")
    .where("path", "<>", `/news/${props.currentSlug}`)
    .order("date", "DESC")
    .limit(5)
    .all(),
);

const share = (platform: string) => {
  const url = window.location.href;
  const title = document.title;

  let shareUrl = "";
  switch (platform) {
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case "telegram":
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
  }

  if (shareUrl) {
    window.open(shareUrl, "_blank", "width=600,height=400");
  }
};
</script>
