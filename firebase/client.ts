import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpknqi2QRXUhJnb1Qx9h582ocaBLA4jvc",
  authDomain: "vocalhire-208f1.firebaseapp.com",
  projectId: "vocalhire-208f1",
  storageBucket: "vocalhire-208f1.firebasestorage.app",
  messagingSenderId: "918440016420",
  appId: "1:918440016420:web:291d85d37ff3cc721bb6b1",
  measurementId: "G-ZMCJ8320TR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);