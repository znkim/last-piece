import { defineConfig } from 'vite'

const isUserOrOrgPage = true
const repoName = 'last-piece'

export default defineConfig({
    base: isUserOrOrgPage ? './' : `/${repoName}/`,
    build: {
        outDir: 'docs',     // GitHub Pages에서 사용할 폴더
        assetsDir: 'assets',
        emptyOutDir: true,  // docs 비우고 다시 빌드
    },
})