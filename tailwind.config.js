/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#211c16',
        paper: '#f4f0e5',
        line: '#dfd7c7',
        muted: '#756d60',
        gold: '#a17a48',
      },
      fontFamily: {
        franklin: ['"Libre Franklin"', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
      },
      boxShadow: {
        md: '0 4px 12px rgba(33, 28, 22, 0.1)',
        lg: '0 8px 20px rgba(33, 28, 22, 0.12)',
        xl: '0 12px 32px rgba(33, 28, 22, 0.15)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
