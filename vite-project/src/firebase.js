// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-327b8.firebaseapp.com",
  projectId: "mern-auth-327b8",
  storageBucket: "mern-auth-327b8.appspot.com",
  messagingSenderId: "149190433572",
  appId: "1:149190433572:web:6b67f66f75cfec21fc71b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);