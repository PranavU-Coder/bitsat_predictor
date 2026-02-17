import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://bitsat-predictor.com",
      dynamicRoutes: ["/", "/under-the-hood", "/about-us"],
    }),
  ],
  server: {
    allowedHosts: ["localhost", "127.0.0.1"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("plotly")) {
            return "plotly";
          }
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor";
            }
          }
        },
      },
    },
  },
});
