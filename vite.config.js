import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://meve404.github.io/', //to tell the github where the project is/
  plugins: [react()]
})
