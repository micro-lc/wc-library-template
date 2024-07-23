import {resolve} from 'path'

import {defineConfig} from 'vite'

import settings from './settings.json'

export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 3000,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        'test-components': resolve(__dirname, 'src/index.ts'),
      },
      output: {
        entryFileNames: ({name}) => `${name}.esm.js`,
      }
    },
    outDir: 'dist',
    emptyOutDir: false,
    manifest: true,
    minify: 'esbuild'
  },
  esbuild: {
    charset: 'utf8',
    legalComments: 'none',
    target: settings.target,
  },
  preview: { host: true, cors: true, port: 3011 },
})
