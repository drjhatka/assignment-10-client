import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode})=>{
  const env = loadEnv(mode,process.cwd(),'');
  return{
    define:{
      'process.env':env
    },
    plugins: [react()],
  }
})
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.VITE_FIREBASE_APIKEY': JSON.stringify(env.VITE_FIREBASE_APIKEY),
//       'process.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
//       'process.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
//       'process.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
//       'process.env.VITE_FIREBASE_MESSEGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSEGING_SENDER_ID),

//     },
//     plugins: [react()],
//   }
// })
//https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   process
  
// })
