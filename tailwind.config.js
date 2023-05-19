/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty:{
        'height': 'height',
        'max-height': 'max-height',
        'width': 'width', 
        'opacity': 'opacity'
      }
    },
  },
  plugins: [],
}

