/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary-color':'F5F7F8',
        'secondry-color':'1230AE',

      },
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"]
      }
    },
    container: { 
      center: true,
      padding: '1rem',
       screens: { sm: '100%', 
         md: '100%', 
          lg: '1024px', 
          xl: '1280px', },
       },

  },
  plugins: [],
}