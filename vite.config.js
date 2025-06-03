import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Indicamos que el directorio “public” será la raíz para servir estáticos
  publicDir: "public"
});
