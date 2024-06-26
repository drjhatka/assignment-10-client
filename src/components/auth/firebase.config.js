// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAyMQjY2LqR12ozdsKaUO4TkFkLSLFDANM",
//   authDomain: "assignment-10-client-6d815.firebaseapp.com",
//   projectId: "assignment-10-client-6d815",
//   storageBucket: "assignment-10-client-6d815.appspot.com",
//   messagingSenderId: "1019063435636",
//   appId: "1:1019063435636:web:dc41c673b8c6a3e9742c21"
// };
//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_APIKEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app