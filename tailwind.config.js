/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  keyframes: {
    logoFade: {
      '0%': { opacity: 0, transform: 'translateY(20px) scale(0.9)' },
      '100%': { opacity: 1, transform: 'translateY(0px) scale(1)' },
    },
  },
  animation: {
    logoFade: 'logoFade 3.0s ease-out forwards',
  },
}
``
}