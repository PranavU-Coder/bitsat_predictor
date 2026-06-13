import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs/promises";
import sitemap from "vite-plugin-sitemap";

type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "BITSAT Predictor | Data-Driven BITS Cutoff Predictions",
    description:
      "Predict your BITSAT score and BITS branch cutoffs with our data-driven tool. Accurate predictions for BITS Pilani, Goa, and Hyderabad based on historical data.",
  },
  {
    path: "/about",
    title: "About: The Team Behind BITSAT Predictor",
    description:
      "Our mission, our team, and how you can contribute to the BITSAT Predictor project.",
  },
  {
    path: "/working",
    title: "Under The Hood: How BITSAT Predictions Work",
    description:
      "Complete transparency on our data collection, difficulty modeling, and BITSAT cutoff prediction methodology.",
  },
];

const HOSTNAME = "https://bitsat-predictor.com";

function multiPageHtml(routes: RouteMeta[]): Plugin {
  return {
    name: "multi-page-html",
    apply: "build",
    async closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const baseHtml = await fs.readFile(
        path.join(distDir, "index.html"),
        "utf-8",
      );

      for (const route of routes) {
        if (route.path === "/") continue;

        const canonical = `${HOSTNAME}${route.path}`;
        const html = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
          .replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="description" content="${route.description}" />`,
          )
          .replace(
            /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
            `<link rel="canonical" href="${canonical}" />`,
          )
          .replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:title" content="${route.title}" />`,
          )
          .replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:description" content="${route.description}" />`,
          )
          .replace(
            /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:url" content="${canonical}" />`,
          )
          .replace(
            /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:title" content="${route.title}" />`,
          )
          .replace(
            /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:description" content="${route.description}" />`,
          );

        const routeDir = path.join(distDir, route.path.replace(/^\//, ""));
        await fs.mkdir(routeDir, { recursive: true });
        await fs.writeFile(path.join(routeDir, "index.html"), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: HOSTNAME,
      dynamicRoutes: ROUTES.map((r) => r.path),
    }),
    multiPageHtml(ROUTES),
  ],
  server: { allowedHosts: ["localhost", "127.0.0.1"] },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("plotly")) return "plotly";
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