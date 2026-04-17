import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps "@/" to the "src/" folder so imports like "@/components/..." work
      '@': path.resolve(__dirname, './src'),
    },
  },
});
