// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Add this line to import getStorage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACxFSmTAdkrK3QzkbpdIev2j0iAzzb1h8",
  authDomain: "lusoinsumosdevelopversion.firebaseapp.com",
  projectId: "lusoinsumosdevelopversion",
  storageBucket: "lusoinsumosdevelopversion.appspot.com",
  messagingSenderId: "270244699311",
  appId: "1:270244699311:web:2c86b60e34889deaa6c85a",
  measurementId: "G-3PP72M45L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authFirebase = getAuth(app);
const storage = getStorage(app);

export { db, authFirebase, storage };
