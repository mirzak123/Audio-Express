/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/home/desktop/image-hero.jpg')",
      },
      colors: {
        darkOrange: '#D87D4A',
        peach: '#fbaf85',
        richBlack: '#101010',
        black: '#000000',
        white: '#ffffff',
        lightGray: '#F1F1F1',
        offWhite: '#FAFAFA',
      }
    },
  },
  plugins: [],
}
