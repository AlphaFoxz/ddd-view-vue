import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

// https://vitejs.dev/config/

function resolve(dir) {
  return path.join(__dirname, dir)
}

export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    //别名
    alias: {
      '@': resolve('src'),
      '@c': resolve('src/components')
    }
  }
})
