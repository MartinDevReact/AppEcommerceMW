import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB93xErxtxcl3YylMuP7cKJJeI_wwSQwoo",
  authDomain: "myappecommercemw.firebaseapp.com",
  projectId: "myappecommercemw",
  storageBucket: "myappecommercemw.appspot.com",
  messagingSenderId: "639859463942",
  appId: "1:639859463942:web:5fb350031e690624e83087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);