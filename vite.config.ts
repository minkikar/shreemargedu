// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // This automatically sets the base to '/' for Vercel/Local 
  // and '/shreemargedu/' for GitHub Pages
  base: process.env.VERCEL || process.env.NODE_ENV === 'development' ? '/' : '/shreemargedu/',

  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})