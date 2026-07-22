// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4pWcuTS8L1TI4jFX-al1BTcLsPsTwff0",
  authDomain: "ngo-web-4bc79.firebaseapp.com",
  projectId: "ngo-web-4bc79",
  storageBucket: "ngo-web-4bc79.firebasestorage.app",
  messagingSenderId: "481818846235",
  appId: "1:481818846235:web:d916756bcc0ffdafb4c4be",
  measurementId: "G-HCBQ0T6VN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth()
export const db= getFirestore()