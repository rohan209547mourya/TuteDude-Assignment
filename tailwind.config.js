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
        gray: 'var(--gray-color)',
        dark: 'var(--dark-main-color)',
        light: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
