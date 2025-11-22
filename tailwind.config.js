/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out',
        'slideDown': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
