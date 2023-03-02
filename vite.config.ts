import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import * as path from 'path';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/

export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: [path.join(__dirname, 'src/index.html')],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
  plugins: [
    vue(),
    eslintPlugin(),
    svgLoader({
      defaultImport: 'component', // or 'raw'
    }),
  ],
});
