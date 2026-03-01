import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBuXSUUMooOR9nuAgd603FztEViKdD7dc",
  authDomain: "blogproject-dabc7.firebaseapp.com",
  projectId: "blogproject-dabc7",
  storageBucket: "blogproject-dabc7.firebasestorage.app",
  messagingSenderId: "452148547577",
  appId: "1:452148547577:web:59c7d2c3947cd89a703728",
  measurementId: "G-NHK9BQ8DL6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
