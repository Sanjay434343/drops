// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3WxZBaNJoZA2p7oe6ihTJCFOE6Y0U_7Q",
  authDomain: "dropshipping-98eb5.firebaseapp.com",
  projectId: "dropshipping-98eb5",
  storageBucket: "dropshipping-98eb5.appspot.com",
  messagingSenderId: "904925867242",
  appId: "1:904925867242:web:af0abda866826e92f8fb93",
  measurementId: "G-BVZR8HY1SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Now you can use 'app' and 'db' in your application to interact with Firebase services.
