// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlRUPJgwZtWtmjqnxzHi0_GNdvmGT0x0U",
  authDomain: "lusoweb-540d4.firebaseapp.com",
  projectId: "lusoweb-540d4",
  storageBucket: "lusoweb-540d4.appspot.com",
  messagingSenderId: "59530160109",
  appId: "1:59530160109:web:cc86398a6dc6347b4129e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
