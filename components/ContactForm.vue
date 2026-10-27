<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="fullName" class="block text-sm font-medium mb-2">نام و نام خانوادگی *</label>
      <input
        id="fullName"
        v-model="form.fullName"
        type="text"
        required
        class="h-10 w-full rounded-full border border-border px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
    </div>

    <div>
      <label for="email" class="block text-sm font-medium mb-2">ایمیل *</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="h-10 w-full rounded-full border border-border px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
    </div>

    <div>
      <label for="company" class="block text-sm font-medium mb-2">نام شرکت</label>
      <input
        id="company"
        v-model="form.company"
        type="text"
        class="h-10 w-full rounded-full border border-border px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
    </div>

    <div>
      <label for="message" class="block text-sm font-medium mb-2">پیام *</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="6"
        class="w-full resize-none rounded-2xl border border-border px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      ></textarea>
    </div>

    <button type="submit" class="btn-primary w-full">
      ارسال پیام
    </button>
    <p v-if="submitted" role="status" class="text-sm font-medium">پیام شما ثبت شد. به‌زودی پاسخ می‌دهیم.</p>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  fullName: '',
  email: '',
  company: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  form.value = {
    fullName: '',
    email: '',
    company: '',
    message: '',
  }
}
</script>
