/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.sans").join(", "),
            code: {
              fontFamily: theme("fontFamily.mono").join(", "),
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        invert: {
          css: {
            code: {
              fontFamily: theme("fontFamily.mono").join(", "),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
