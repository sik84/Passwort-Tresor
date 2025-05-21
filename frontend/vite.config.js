import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // von außen erreichbar
    port: 5173,
    proxy: {
      '/api': {
        // ⬇︎ nur HTTP und Service-Name im Docker-Netz
        target: 'http://backend:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
