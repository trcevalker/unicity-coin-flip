import { defineConfig } from 'vite'

export default defineConfig({
  base: '/unicity-dice-duel/',
  optimizeDeps: {
    include: ['@unicitylabs/sphere-sdk']
  },
  build: {
    outDir: 'dist',
    target: 'esnext'
  },
  define: {
    global: 'globalThis'
  }
})
