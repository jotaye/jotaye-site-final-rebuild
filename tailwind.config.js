// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#f9fafb' // ligero gris para romper el blanco puro
      }
    }
  },
  plugins: []
};
