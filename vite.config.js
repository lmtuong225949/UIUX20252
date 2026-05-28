import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin_app.html'),
        doctor: resolve(__dirname, 'doctor_app.html'),
        expert: resolve(__dirname, 'expert_app.html'),
        patient: resolve(__dirname, 'patient_app.html'),
      },
    },
  },
})
