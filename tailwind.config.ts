import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "hero-text": "hero_1 9500ms linear 500ms",
        "hero-text-1": "hero_1 9300ms linear 700ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
