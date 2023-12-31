/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Futura Bk', 'sans-serif'],
      heading: ['Futura Md', 'sans-serif']
    },
    extend: {
      colors: {
        'background': "#909B93"
      },
      
    },
    screens: {
      '2xl': {'min': '1536px'},
      'xl': {'min': '1280px'},
      'lg': {'min': '1024px'},
      'md': {'min': '768px'},
      'sm': {'min': '640px'},
    },
    keyframes: {
      slideIn: {
        '0%': {right: '-100%'},
        '100%': {right: '0%'}
      },
      slideOut: {
        '0%': {right: '0%'},
        '100%': {right: '-100%'}
      },
      dropdown: {
        '0%': {transform: 'translateY(-20px)', opacity: 0},
        '100%': {transform: 'translateY(0px)', opacity: 1}
      },
      goUp: {
        '0%': {transform: 'translateY(0px)', opacity: 1},
        '100%': {transform: 'translateY(-20px)', opacity: 0}
      }
    },
    animation: {
      slideIn: 'slideIn ease-in-out 300ms',
      slideOut: 'slideOut ease-in-out 300ms',
      dropdown: 'dropdown ease-in-out 300ms',
      goUp: 'goUp ease-in 300ms'
    }
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '' // set a prefix to use it alongside the default font sizes
    },
    
    values: {
        'xs': [-2, 1.6],
        'sm': [-1, 1.6],
        'base': [0, 1.6],
        'lg': [1, 1.6],
        'xl': [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
    },
    }),
  ],
}
