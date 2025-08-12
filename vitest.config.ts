import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    // @ts-expect-error: Fuck
    plugins: [tsconfigPaths()],
    test: {
        environment: "node",
        include: ["src/**/*.spec.ts"],
    },
});
