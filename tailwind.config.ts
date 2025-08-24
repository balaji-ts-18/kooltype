import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'sub-alt': 'var(--color-sub-alt)',
        main: 'var(--color-main)',
        sub: 'var(--color-sub)',
        caret: 'var(--color-caret)',
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        'extra-error': 'var(--color-extra-error)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config