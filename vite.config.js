import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'add-nojekyll',
      writeBundle() {
        writeFileSync(resolve(__dirname, 'dist', '.nojekyll'), '')
      }
    }
  ],
  server: {
    port: 3000,
    host: true
  },
  base: '/aldahawaqah-restaurant/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})