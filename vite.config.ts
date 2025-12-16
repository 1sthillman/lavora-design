import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

// GitHub Pages için base path ayarı
// Repository adı: lavora-design
const base = process.env.BASE_PATH || 
  (process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
    : "/lavora-design/");
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
        sourcemap: true,
        outDir: "out",
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
