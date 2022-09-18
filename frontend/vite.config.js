import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  clearScreen: false,
  build: {
    minify: mode === 'production' && 'terser'
  },

  plugins: [ react() ],

  server: {
    port: 3000,
    host: true
  },
}));
