import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
          host: '0.0.0.0', // 允许从外部访问
          port: 5173, // 可以自定义端口号
          strictPort: true, // 确保使用指定的端口
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist'
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
});
