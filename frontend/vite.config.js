import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./certs/key.pem'), // Pfad zum privaten Schlüssel
      cert: fs.readFileSync('./certs/cert.pem'), // Pfad zum Zertifikat
    },
    host: 'localhost',
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://localhost:4000',  // Backend-URL mit https
        changeOrigin: true,
        secure: false,  // Setze dies auf false, wenn du selbstsignierte Zertifikate verwendest
      },
    },
  },
});
