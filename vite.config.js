import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    base: "/proyecto-final/",
    build: {
        outDir: "../docs",
        emptyOutDir: true,

    }
});