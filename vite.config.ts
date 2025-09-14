import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        sourcemap: true, // enables accurate module sizing
        rollupOptions: {
            plugins: [
                process.env.ANALYZE === "true" &&
                    visualizer({
                        filename: "stats.html",
                        template: "treemap", // "sunburst" | "treemap" | "network"
                        gzipSize: true,
                        brotliSize: true,
                        open: true, // auto-open after build
                    }),
            ].filter(Boolean),
        },
    },
});
