/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // THIS LINE IS CRITICAL
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B0',
        },
        dark: {
          DEFAULT: '#0A0A08',
          soft: '#111110',
          card: '#1A1A18',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}