import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tic-tac-toe/',
  resolve: {
    alias: {
      /* '@': path.resolve(__dirname, './src'), - - универсально для доступа к src*/
      '@types': path.resolve(__dirname, './src/shared/types'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
      '@features': path.resolve(__dirname, './src/features'),
      '@app': path.resolve(__dirname, './src/app'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
