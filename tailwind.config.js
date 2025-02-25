/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          bg: '#121212',
          card: '#1e1e1e',
          border: '#2c2c2c',
          text: '#e0e0e0',
          heading: '#ffffff',
          muted: '#a0a0a0',
          hover: '#2a2a2a'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#334155',
            a: {
              color: '#0ea5e9',
              '&:hover': {
                color: '#0369a1',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#e0e0e0',
            a: {
              color: '#38bdf8',
              '&:hover': {
                color: '#7dd3fc',
              },
            },
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            code: { color: '#e0e0e0', backgroundColor: '#1e1e1e' },
            pre: { backgroundColor: '#1e1e1e', borderColor: '#2c2c2c' },
            strong: { color: '#ffffff' },
            blockquote: { borderLeftColor: '#38bdf8', color: '#e0e0e0' },
            'ul > li::before': { backgroundColor: '#a0a0a0' },
            'ol > li::before': { color: '#a0a0a0' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}