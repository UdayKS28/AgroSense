/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        forest: '#0c1a12',
        sage: '#4a7c59',
        sageLight: '#7cc894',
        gold: '#f5a623',
        skyblue: '#7bb8f5',
        cream: '#f5f0e8',
      },
      keyframes: {
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        pulseDot: 'pulseDot 2s infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
}