/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/views/Components/*.{ts, tsx}',
    './src/views/Pages/*.{ts, tsx}',
    './src/views/Layouts/*.{ts, tsx}',
    './src/*.{tsx, ts}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}