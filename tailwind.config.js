/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: {
          dark: '#121212',
          card: 'rgba(22, 22, 30, 0.8)',
        },
        neon: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          violet: '#8A2BE2',
        },
        gray: {
          750: '#2F3138',
          850: '#1E1F25',
        }
      },
      boxShadow: {
        glow: '0 0 15px rgba(0, 255, 255, 0.5)',
        'glow-magenta': '0 0 15px rgba(255, 0, 255, 0.5)',
        'glow-violet': '0 0 15px rgba(138, 43, 226, 0.5)',
      },
      backdropFilter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(12px)',
      },
    },
  },
  plugins: [],
}