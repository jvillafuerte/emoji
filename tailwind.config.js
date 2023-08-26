/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '12xl': '12rem',
        'emoji-h': '27vh',
        'emoji-w': '30vw'
      },
      screens: {
        'wide': {
          'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
        },
      }
    },
  },
  plugins: [],
}

