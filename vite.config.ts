import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/', replacement: '/src/' }
    ]
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({ overrideBrowserslist: ['> 0%'] })
      ]
    }
  },
  base: '/lager/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
