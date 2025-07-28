// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4A4D', 
        secondary: '#870002', // light lavender/white background
        textDark: '#1F2937', // for text
        textLight: '#F9FAFB' // light text
      },
    },
  },
  plugins: [],
}
