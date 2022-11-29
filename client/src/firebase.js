// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPTq28ec6nAmFMy_dTk8CBhipRNMSqyiE",
  authDomain: "frontendcurd.firebaseapp.com",
  projectId: "frontendcurd",
  storageBucket: "frontendcurd.appspot.com",
  messagingSenderId: "562794989604",
  appId: "1:562794989604:web:f1e004ffb42ba26d29b0b1",
  measurementId: "G-NSH0GWXDLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
