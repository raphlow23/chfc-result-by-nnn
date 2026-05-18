import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: "var(--color-navy-950)",
            900: "var(--color-navy-900)",
            800: "var(--color-navy-800)",
            700: "var(--color-navy-700)"
          },
          red: {
            600: "var(--color-red-600)",
            500: "var(--color-red-500)",
            100: "var(--color-red-100)"
          }
        }
      },
      boxShadow: {
        archive: "0 18px 48px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
} satisfies Config;
