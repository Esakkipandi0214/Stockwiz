// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwKctrHIZMh-4qKveWMJOPa9eqhw2rbJ8",
  authDomain: "zentra-d61f2.firebaseapp.com",
  projectId: "zentra-d61f2",
  storageBucket: "zentra-d61f2.appspot.com",
  messagingSenderId: "567761424745",
  appId: "1:567761424745:web:c31d018429154795ddedf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Export the Firestore instance
