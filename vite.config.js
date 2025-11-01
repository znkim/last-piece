import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        assetsDir: 'assets',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                mobile: resolve(__dirname, 'mobile.html'),
                designer: resolve(__dirname, 'web/designer.html'),
                exhibition: resolve(__dirname, 'web/exhibition.html'),
                projects: resolve(__dirname, 'web/projects.html'),
                sponsor: resolve(__dirname, 'web/sponsor.html'),
            }
        }
    },
})