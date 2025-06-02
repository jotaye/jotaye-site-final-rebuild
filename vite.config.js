import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para que el public/ assets queden accesibles en /assets/...
  publicDir: "public",
  build: {
    rollupOptions: {
      // Si en algún momento externalizas módulos, agrégalos aquí
      external: [],
    },
  },
});
