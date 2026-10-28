<template>
  <span class="inline-flex items-center justify-center">
    <picture>
      <source :srcset="webp" type="image/webp" />
      <AppImage
        :src="pngPath"
        :alt="alt"
        :eager="eager"
        :class="variant === 'mark' ? 'h-12 w-auto' : 'h-auto w-64 max-w-full'"
      />
    </picture>
  </span>
</template>

<script setup lang="ts">
import { withBase } from "~/utils/withBase";
import { siteFullName, siteName } from "~/utils/site";

const props = withDefaults(
  defineProps<{
    variant: "mark" | "full";
    eager?: boolean;
  }>(),
  { eager: false },
);

const baseURL = useRuntimeConfig().app.baseURL;
const pngPath = computed(() =>
  props.variant === "mark" ? "/brand/logo-mark.png" : "/brand/logo-full.png",
);
const webp = computed(() =>
  withBase(baseURL, pngPath.value.replace(/\.png$/, ".webp")),
);
const alt = computed(() => (props.variant === "mark" ? siteName : siteFullName));
</script>
