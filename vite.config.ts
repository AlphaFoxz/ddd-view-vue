import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: 'net',
        replacement: 'node:net'
      },
      {
        find: 'buffer',
        replacement: '/src/script/buffer/index.js'
      }
    ]
  }
})
