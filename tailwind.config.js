/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       zIndex: {
        '-1': '-1',
      },  
      colors: {
        'Toko-hijau': '#2BB83A',
      },
       fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(4px)' },
          '75%': { transform: 'translateY(-4px)' }
        }
      },
      animation: {
        bounce: 'smoothBounce 1200ms'
      }
    },
  },
  plugins: [],
}