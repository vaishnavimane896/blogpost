// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GithubAuthProvider} from 'firebase/auth' 
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBuXSUUMooOR9nuAgd603FztEViKdD7dc",
  authDomain: "blogproject-dabc7.firebaseapp.com",
  projectId: "blogproject-dabc7",
  storageBucket: "blogproject-dabc7.firebasestorage.app",
  messagingSenderId: "452148547577",
  appId: "1:452148547577:web:59c7d2c3947cd89a703728",
  measurementId: "G-NHK9BQ8DL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const db = getFirestore(app);
 export const auth =getAuth(app);
 export const provider = new GithubAuthProvider();