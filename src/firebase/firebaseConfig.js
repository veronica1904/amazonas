// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAhnNGrzAesPikNzAC0lFt-ImoSXbuMP6s",
  authDomain: "as-a60d8.firebaseapp.com",
  projectId: "as-a60d8",
  storageBucket: "as-a60d8.appspot.com",
  messagingSenderId: "179173579403",
  appId: "1:179173579403:web:feb05982c55c22e940128e",
  measurementId: "G-CDYGSM6TMQ"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app,
  google,
  facebook,
  db
}