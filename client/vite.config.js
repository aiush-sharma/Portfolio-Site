import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Highlight-start
      // This tells Rolldown to externalize anything containing 'next/navigation'
      external: [/next\/navigation/],
      // Highlight-end
    },
  },
});
