import path from 'node:path';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SampleViteLitTailwind',
      filename: 'sample-vite-lit-tailwind',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        globals: {
          lit: 'Lit'
        }
      }
    },
    sourcemap: true
  },
})
