import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        chocolate: '#3E2723',
        mocha: '#5D4037',
        caramel: '#8D6E63',
        beige: '#D7CCC8',
        cream: '#FFF8F0',
        champagne: '#F5E6D3',
        'soft-gold': '#C9A96E',
        'warm-white': '#FEFCF9',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
