// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css:{
//     modules:{
//       localsConvention: "camelCase"
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures correct relative paths for deployment
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
