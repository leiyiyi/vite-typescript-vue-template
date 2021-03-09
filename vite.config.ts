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
      '@': resolve(__dirname, './src'),
    },
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
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        admin: resolve(__dirname, './admin.html'),
        auth: resolve(__dirname, './auth.html'),
      },
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // entryFileNames: '[name].js'
      },
    },
    minify: 'terser',
  },
})
