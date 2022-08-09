import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://meve404.github.io/gh-react-vite/', //to tell the github where the project is/
  plugins: [react()]
})
