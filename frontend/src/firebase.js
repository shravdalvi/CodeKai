import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDElY88EEXkVwtiPQMaroaYD_v6TvXHgDA",
  authDomain: "dsamaster-ee841.firebaseapp.com",
  projectId: "dsamaster-ee841",
  storageBucket: "dsamaster-ee841.firebasestorage.app",
  messagingSenderId: "946244660991",
  appId: "1:946244660991:web:b1697c8c49586dd58326ca",
  measurementId: "G-EXPD1CXR0X"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
