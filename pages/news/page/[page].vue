<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// This page just redirects to the news index with the page parameter
const route = useRoute()
const router = useRouter()

// The news index page handles the pagination logic
definePageMeta({
  alias: ['/news/page/:page'],
})
</script>
