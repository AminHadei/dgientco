import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1c1917",
          foreground: "#fafaf9",
        },
        foreground: "#0c0a09",
        muted: {
          DEFAULT: "#f5f5f4",
          foreground: "#79716b",
        },
        secondary: "#f5f5f4",
        border: "#e7e5e4",
        accent: {
          blue: "#024a70",
          "blue-light": "#eff6ff",
          orange: "#fff7ed",
        },
      },
      borderRadius: {
        lg: "1.125rem",
        xl: "1.575rem",
        md: "0.9rem",
      },
      maxWidth: {
        content: "80rem",
        container: "90rem",
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
        display: ["Vazirmatn", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 8vw, 5.5rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "900" },
        ],
        "display-lg": [
          "clamp(2.5rem, 6vw, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "900" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "900" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
