// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // La carpeta 'public/' ya está configurada por defecto como publicDir
  // publicDir: "public",
});
