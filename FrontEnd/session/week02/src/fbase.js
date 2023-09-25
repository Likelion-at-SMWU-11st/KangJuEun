// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhCWtnAtAEqMHdPr2a_La0LE2qeXOBrRs",
  authDomain: "fir-web-3f6a2.firebaseapp.com",
  projectId: "fir-web-3f6a2",
  storageBucket: "fir-web-3f6a2.appspot.com",
  messagingSenderId: "762573517725",
  appId: "1:762573517725:web:3b337acdda5f4a90eaf574",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export {
  firebaseApp,
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
