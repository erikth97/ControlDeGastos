// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Importar Firebase Auth

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4gc2H7QAGXrcocO3c_yxLfwJ_DzvN4-g",
  authDomain: "controldegastos-55133.firebaseapp.com",
  projectId: "controldegastos-55133",
  storageBucket: "controldegastos-55133.appspot.com",
  messagingSenderId: "963441159267",
  appId: "1:963441159267:web:b064e2f7b15c8250c25c56",
  measurementId: "G-J8QESFEE5X"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase services
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app); // Inicializar Firebase Auth

export { app, firestore, auth }; // Exportar los servicios para su uso en otros archivos
