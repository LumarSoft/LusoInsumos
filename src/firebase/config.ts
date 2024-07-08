// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbsry21Kr9qZc9hA5jSlq4jHMpw11Ht-0",
  authDomain: "luso-dd67e.firebaseapp.com",
  projectId: "luso-dd67e",
  storageBucket: "luso-dd67e.appspot.com",
  messagingSenderId: "467029301112",
  appId: "1:467029301112:web:0019b52be6deb077b19a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authFirebase = getAuth(app);

export { db, authFirebase };
