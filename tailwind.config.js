/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marqueekiri: 'marqueekiri 25s linear infinite',
        bounce: 'smoothBounce 1200ms'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueekiri: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(4px)' },
          '75%': { transform: 'translateY(-4px)' }
        }
      },
      backgroundImage: {
        'hero': "url('/Hero/BG_landing awal.png')",
        'hero_layanan': "url('/Hero/BG_Layanan.png')",
        'hero_tentangkami': "url('/Hero/Bor_lantai.png')",
        'layanan': "url('/Background/Bg_layanan.png')",
      },
      screens: {
        'hd': '1366px',
        'fhd':'1080px'
      },
      zIndex: {
        '-1': '-1',
      },  
      colors: {
        'Toko-hijau': '#2BB83A',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        sans3: ['Source Sans 3']
      }
    },
  },
  variants: {},
  plugins: [],
  mode: 'jit', // Mode 'jit' akan meningkatkan kecepatan kompilasi
}