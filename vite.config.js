import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages 주소가 /figma/ 이므로 빌드할 때만 base를 /figma/ 로 두고, 개발 서버는 / 에서 연다.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/figma/' : '/',
  plugins: [react()],
}))
