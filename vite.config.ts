import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW ? true : false;

export default defineConfig({
    define: {
        __BASE_PATH__: JSON.stringify(base),
        __IS_PREVIEW__: JSON.stringify(isPreview),
        __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
        __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
        __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
    },
    plugins: [
        react(),
    ],
    base,
    build: {
        sourcemap: false, // Production'da sourcemap'i kapat
        outDir: "out",
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // console.log'ları kaldır
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'framer-motion': ['framer-motion'],
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
        cssCodeSplit: true,
        assetsInlineLimit: 4096, // 4kb'den küçük dosyaları inline yap
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
        host: "0.0.0.0",
    },
});
