/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-main-color)',
        'primary/25': 'rgba(128,0,128,0.25)',
        gray: 'var(--gray-color)',
        'light-gray': 'var(--light-gray-color)',
        dark: 'var(--dark-main-color)',
        light: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
