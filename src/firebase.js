// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7-mRbyLA5QTfij8iMFkyh858mtnocIZE",
  authDomain: "memomingle-ac8fb.firebaseapp.com",
  projectId: "memomingle-ac8fb",
  storageBucket: "memomingle-ac8fb.firebasestorage.app",
  messagingSenderId: "784608126635",
  appId: "1:784608126635:web:5f45b174fcd546f45c39ee",
  measurementId: "G-G37EBYH1TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
