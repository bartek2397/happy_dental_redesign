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
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1920px',
    }
  },
  plugins: [],
}
