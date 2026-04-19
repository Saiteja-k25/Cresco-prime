/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080808',
        'bg-secondary': '#101010',
        'bg-card': '#161614',
        'gold': '#B8860B',
        'gold-light': '#D4AF6A',
        'gold-dim': '#7A5C1E',
        'gold-glow': '#C9A84C',
        'border-subtle': '#1E1C18',
        'text-primary': '#F0EDE8',
        'text-secondary': '#8A8880',
        'text-muted': '#4A4845',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
