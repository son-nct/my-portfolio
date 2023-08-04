import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      /*
      1. path.resolve will resolve path segment to absolute path
      2. resolve will treat this as root directory and ignore the previous path
      ex : ..src/abc/.. -> @/abc ( bỏ hêt các đường dẫn phía trước)
      */
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      dirs: [
        './src/components/atoms',
        './src/components/molecules',
        './src/components/organisms',
        './src/components/templates'
      ]
    }),
    AutoImport({
      dts: true,
      dirs: ['./src/components/composables'],
      imports: [
        'vue',
        'vue-router',
        
      ]
    })
  ],
})
