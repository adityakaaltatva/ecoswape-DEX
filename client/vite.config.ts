import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // Ensures Vite recognizes index.html in client/
  publicDir: 'public', // Ensure static files are detected
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
