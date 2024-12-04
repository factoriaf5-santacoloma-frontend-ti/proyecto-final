import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    base: "/test-rutas/",
    build: {
        outDir: "../docs",
        emptyOutDir: true,

    }
});