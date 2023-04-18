import { defineConfig } from "vite";

export default defineConfig({
    base: "/fourier_series/",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]"
            }
        }
    }
})