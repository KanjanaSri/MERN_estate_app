// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-app-mern.firebaseapp.com",
  projectId: "estate-app-mern",
  storageBucket: "estate-app-mern.appspot.com",
  messagingSenderId: "126535432063",
  appId: "1:126535432063:web:3ed09a5fd89efffaeacc4a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
