import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    base: "/proyecto-final/",
    build: {
        outDir: "../docs",
        emptyOutDir: true,
        rollupOptions:{
            input:{
            index: "/index.html",
            sala_juan: "/views/sala_juan.html"
        }}

    }
});