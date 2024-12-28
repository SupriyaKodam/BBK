/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include your source files here
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      animation: {
        'fall': 'fall 10s linear infinite',
        'drift': 'drift 5s ease-in-out infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
};
