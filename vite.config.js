// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/", // si tu sitio está en la raíz. Si no, agrega la subcarpeta.
});
