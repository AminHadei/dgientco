import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1c1917',
          foreground: '#fafaf9',
        },
        foreground: '#0c0a09',
        muted: {
          DEFAULT: '#f5f5f4',
          foreground: '#79716b',
        },
        secondary: '#f5f5f4',
        border: '#e7e5e4',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
      maxWidth: {
        content: '80rem',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
