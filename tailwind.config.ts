import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        izmir: 'var(--font-izmir)',
        jaipur: 'var(--font-jaipur)',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
