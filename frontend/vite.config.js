import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://mern-e-ciommerce-backend.vercel.app/",
      "/uploads/": "https://mern-e-ciommerce-backend.vercel.app/",
    },
  },
});
