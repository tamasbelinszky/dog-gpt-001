/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        light: '#E8C6EC',
        DEFAULT: '#9629E3',
        dark: '#F2E05D',
      },
      secondary: {
        light: '#4AE0B4',
        DEFAULT: '#059669',
        dark: '#FBD38D',
      },
    },
  },
  plugins: [],
}
