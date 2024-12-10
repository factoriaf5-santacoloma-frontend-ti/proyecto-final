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
            sala_alba:"/views/sala_alba.html",
            sala_deep:"/views/sala_deep.html",
            sala_elsa:"/views/sala_elsa.html",
            sala_faryal:"/views/sala_faryal.html",
            sala_hassan:"/views/sala_hassan.html",
            sala_jiale:"/views/sala_jiale.html",
            sala_jorge:"/views/sala_jorge.html",
            sala_juan:"/views/sala_juan.html",
            sala_luisa:"/views/sala_luisa.html",
            sala_moha:"/views/sala_moha.html",
            sala_paola:"/views/sala_paola.html",
        }}

    }
});