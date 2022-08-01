/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light theme
        primary: '#ddd6fe',
        secondary: '#ede9fe',
        link: '#FFFFFF',
        accent: '#8a5cf6',
        footer: '#cbd5e1',
        // dark theme
        primaryDark: '#3f3f46',
        secondaryDark: '#52525b',
        linkDark: '#a78bfa',
        accentDark: '#FFFFFF',
        backgroundDark: '#201A1A',
        footerDark: '#aeb3b8'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
