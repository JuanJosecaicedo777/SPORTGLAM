// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAS4fec2ImAYQzmoS1fOvhYJQ8FwtY_oJo",
  authDomain: "sportglam-c6f10.firebaseapp.com",
  projectId: "sportglam-c6f10",
  storageBucket: "sportglam-c6f10.appspot.com",
  messagingSenderId: "761583425975",
  appId: "1:761583425975:web:79c5858b4ddf825e7cb032",
  measurementId: "G-V3CRM1PGL3"
};

// 🔹 Inicialización
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export default app;
