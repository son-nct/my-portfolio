/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Montserrat fallback', 'sans-serif']
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9' // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      boxShadow: {
        custom: '8px 8px 0 4px rgba(0, 0, 0, 1)'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px)'
      }
    }
  },
  plugins: []
}