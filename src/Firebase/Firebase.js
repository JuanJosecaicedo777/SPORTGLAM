// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// 🔹 Configuración de Firebase de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyAS4fec2ImAYQzmoS1fOvhYJQ8FwtY_oJo",
  authDomain: "sportglam-c6f10.firebaseapp.com",
  projectId: "sportglam-c6f10",
  storageBucket: "sportglam-c6f10.appspot.com",
  messagingSenderId: "761583425975",
  appId: "1:761583425975:web:79c5858b4ddf825e7cb032",
  measurementId: "G-V3CRM1PGL3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios que usas
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
