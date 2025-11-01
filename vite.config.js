import { defineConfig } from 'vite'

// ⚠️ 프로젝트 페이지(project pages)라면 base는 '/레포명/' 로,
// 사용자/조직 페이지(username.github.io)라면 base는 '/' 로!
const isUserOrOrgPage = true // username.github.io 형태면 true
const repoName = 'last-piece'    // 레포 이름으로 변경

export default defineConfig({
    base: isUserOrOrgPage ? './' : `/${repoName}/`,
    build: {
        outDir: 'docs',     // GitHub Pages에서 사용할 폴더
        assetsDir: 'assets',
        emptyOutDir: true,  // docs 비우고 다시 빌드
    },
})