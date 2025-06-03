/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Por ejemplo, agregamos un degradado personalizado (opcional)
      backgroundImage: {
        "page-gradient": "linear-gradient(to bottom, #ffffff, #f3f4f6)"
      }
    }
  },
  plugins: []
};
