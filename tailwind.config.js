/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0a0a0a',
        'card-dark': '#1a1a1a',
      },
      backgroundImage: {
        'starwars': 'radial-gradient(50% 50% at 50% 50%, #161618 0%, #121214 100%)',
        'starwars-light': 'radial-gradient(50% 50% at 50% 50%, #f8fafc 0%, #e2e8f0 100%)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
