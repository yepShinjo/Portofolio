import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"] // add .jsx extension here
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.js' // specify the entry point here
    }
  }
})
