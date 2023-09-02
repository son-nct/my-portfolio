module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         montserrat: ['Montserrat'],
      },
      container: {
         padding: {
            DEFAULT: '15px',
         },
      },
      screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         '2xl': '1536px',
      },
      extend: {
         colors: {
            dark: "#1b1b1b",
            light: "#f5f5f5",
            primary: "#B63E96", // 240,86,199
            primaryDark: "#58E6D9", // 80,230,217
         },
         backgroundImage: {
            circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);'
         },
         animation: {
            'spin-slow': 'spin 8s linear infinite'
         },
         zIndex: {
            'negative': '-1'
         },
         boxShadow: {
            'custom': '8px 8px 0 5px rgba(0, 0, 0, 1)',
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require('tailwindcss-animated')],
}
