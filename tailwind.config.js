/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can uncomment and set a custom green if you want
        // accent: '#08c55d',
      },
    },
  },
  plugins: [],
} 