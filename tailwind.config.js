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
      'sm': {'min': '640px', 'max': '1023px'},
      'md': {'min': '1024px', 'max': '1279px'},
      'lg': {'min': '1280px', 'max': '1535px'},
      'xl': {'min': '1536px'},
    }
  },
  plugins: [],
}
