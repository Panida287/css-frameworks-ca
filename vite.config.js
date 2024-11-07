// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import postcss from 'postcss';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, postcss]
    }
  }
});
