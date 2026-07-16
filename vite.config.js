import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'your-repo-name' to match your actual GitHub repo name.
// If your repo is https://github.com/yourname/mymymind, base should be '/mymymind/'
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
