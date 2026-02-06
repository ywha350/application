
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 저장소 이름이 'my-repo'라면 '/my-repo/'로 설정해야 합니다.
  // 사용자명.github.io 형태의 루트 도메인이라면 '/'를 사용하세요.
  base: './', 
});
