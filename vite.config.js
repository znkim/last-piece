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
                designer: resolve(__dirname, 'web/designer.html'),
                exhibition: resolve(__dirname, 'web/exhibition.html'),
                projects: resolve(__dirname, 'web/project.html'),
                sponsor: resolve(__dirname, 'web/sponsor.html'),
                deContents: resolve(__dirname, 'web/de-contents.html'),
                prContents: resolve(__dirname, 'web/pr-contents.html'),

                mobile: resolve(__dirname, 'mobile.html'),
                designerMobile: resolve(__dirname, 'mobile/designer.html'),
                exhibitionMobile: resolve(__dirname, 'mobile/exhibition.html'),
                projectsMobile: resolve(__dirname, 'mobile/project.html'),
                sponsorMobile: resolve(__dirname, 'mobile/sponsor.html'),
                deContentsMobile: resolve(__dirname, 'mobile/de-contents.html'),
                prContentsMobile: resolve(__dirname, 'mobile/pr-contents.html'),
            }
        }
    },
})