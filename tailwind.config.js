/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F4EF",
        foreground: "#1F1F1F",
        accent: {
          gold: "#D6B278",
          "gold-hover": "#C89E57",
        },
        warm: {
          beige: "#E9E2D2",
        },
        light: {
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};