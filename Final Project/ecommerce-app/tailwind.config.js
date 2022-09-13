/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        secondary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d"},
        danger: {"50":"#fdf2f2","100":"#fde8e8","200":"#fbd5d5","300":"#f8b4b4","400":"#f98080","500":"#f05252","600":"#e02424","700":"#c81e1e","800":"#9b1c1c","900":"#771d1d"},
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
