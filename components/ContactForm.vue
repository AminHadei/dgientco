<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="fullName" class="block text-sm font-medium mb-2">نام و نام خانوادگی *</label>
      <input
        id="fullName"
        v-model="form.fullName"
        type="text"
        required
        class="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
    </div>

    <div>
      <label for="email" class="block text-sm font-medium mb-2">ایمیل *</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
    </div>

    <div>
      <label for="company" class="block text-sm font-medium mb-2">نام شرکت</label>
      <input
        id="company"
        v-model="form.company"
        type="text"
        class="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
    </div>

    <div>
      <label for="message" class="block text-sm font-medium mb-2">پیام *</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="6"
        class="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
      ></textarea>
    </div>

    <button type="submit" class="btn-primary w-full">
      ارسال پیام
    </button>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  fullName: '',
  email: '',
  company: '',
  message: '',
})

const handleSubmit = () => {
  // Mock form submission
  alert(`فرم با موفقیت ارسال شد!\n\nنام: ${form.value.fullName}\nایمیل: ${form.value.email}`)
  
  // Reset form
  form.value = {
    fullName: '',
    email: '',
    company: '',
    message: '',
  }
}
</script>
