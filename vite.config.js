import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        // postCssPxToRem({
        //   rootValue: 192, // （设计稿/10）1rem的大小
        //   propList: ['*', '!border', '!font-size', '!max-width', '!min-width', '!min-height'] // 除 border/font-size 外所有px 转 rem
        // })
      ]
    }
  }
})
