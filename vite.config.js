import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ເປີດໃຫ້ເຂົ້າຈາກ network ໄດ້
    port: 3000,      // ກຳນົດ port
  },
})