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
      },
      keyframes: {
        fadein:{
          '0%': {'opacity': '0'}, 
          '100%': {'opacity': '1'}
        }, 
        fadeout:{
          '0%': {'opacity': '1'}, 
          '100%':{'opacity': '0'}
        }
      }, 
      animation: {
        fadein: 'fadein 0.5s ease-in', 
        fadeout: 'fadeout 0.5 ease-out'
        
      }, 
      colors: {
        'bg-grey': '#f5f5f5',
        "theme-blue": "#4675CE"
      }
    },

  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

