import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/lavora-design/', // ⭐ https://github.com/1sthillman/lavora-design
    plugins: [react()],
    build: {
        outDir: 'out'
    }
})