/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ this tells Tailwind where to scan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
