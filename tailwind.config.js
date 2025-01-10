/** @type {import('tailwindcss').Config} */
import react from '@tailwindcss/typography'
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [react()],
  base: '/web-portfolio/',
}

