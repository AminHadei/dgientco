<template>
  <img
    :src="resolvedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :srcset="resolvedSrcset"
    :sizes="sizes"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : 'auto'"
    decoding="async"
  />
</template>

<script setup lang="ts">
import { sizeOf } from "~/utils/images";
import { withBase } from "~/utils/withBase";

const props = defineProps<{
  src: string;
  alt: string;
  eager?: boolean;
  srcset?: string;
  sizes?: string;
}>();

const baseURL = useRuntimeConfig().app.baseURL;
const resolvedSrc = computed(() => withBase(baseURL, props.src));
const resolvedSrcset = computed(() => {
  if (!props.srcset) return undefined;
  return props.srcset
    .split(",")
    .map((part) => {
      const [url, descriptor] = part.trim().split(/\s+/);
      if (!url) return "";
      return `${withBase(baseURL, url)}${descriptor ? ` ${descriptor}` : ""}`;
    })
    .filter(Boolean)
    .join(", ");
});
const [width, height] = sizeOf(props.src);
</script>
