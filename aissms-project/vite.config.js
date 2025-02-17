
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost", // or "0.0.0.0" if accessing from another device
    port: 5173, // Ensure this is the correct port
    strictPort: true, // Ensures the port does not change
    hmr: {
      protocol: "ws",
      host: "localhost", // Use the correct host
      port: 5173, // Match this with your dev server port
      clientPort: 5173,
    },
  },
});
