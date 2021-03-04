import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // alias: [
    //   {
    //     find: '@',
    //     replacement: resolve(__dirname, './src'),
    //   },
    // ],
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 30011,
    strictPort: true,
    https: false,
    open: false,
    cors: true,
    hmr: true,
    // proxy: {}
  },
  build: {
    // 'modules' or 'esnext' or array->(valid: esN, chromeN, edgeN, firefoxN, iosN, nodeN, safariN)
    target: 'esnext',
  },
})
