module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Merriweather Sans'],
        'logo': ['Pacifico'],
        'sub-headings': ['Merriweather'],
        'fira': ['Fira Sans']
      },
      screens: {
        sm: '720px',
        md: '850px',
        lg: '950px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: {
          light: '#fbeeee',
          dark: '#794d4d'
        },
        secondary: '#424242',
        lightHeadings: '#D0D0D0'
      },
      width: {
        90: '90%',
        42: '42rem'
      },
      height: {
        100: '28rem',
        'screen-80': '80vh'
      },
      boxShadow: {
        'search': '2px 4px 4px rgb(0 0 0 / 25%)',
        'place-preview': '0 0 5px 3px hsl(0deg 0% 66% / 53%)'
      },
      spacing: {
        '75': '0 0 75% 0' 
      },
      minWidth: {
        16: '16rem'
      },
      maxWidth: {
        50: '50rem'
      },
      transitionDuration: {
        '.3s': '.3s'
      },
      transitionTimingFunction: {
        'custom': 'ease-out'
      },
      transitionProperty: {
        'property-all': 'all'
      },
      animation: {
        'spin-slow': 'spin 1600ms ease-in-out infinite',
      },
      zIndex: {
        1: '-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
