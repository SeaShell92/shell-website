/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.html.twig"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'dark-blue': '#030363',
      'purple': '#8541c8',  
      'light-blue': '#a2a2f6',
    },

    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}

