import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 저장소 이름이 'application'이므로 경로를 맞춰줍니다.
  base: '/application/', 
});