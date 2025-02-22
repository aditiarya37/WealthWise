import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMT63B_YUZrDgsJZns76cmMSYpW6boI20",
  authDomain: "wealthwise-5b7f3.firebaseapp.com",
  projectId: "wealthwise-5b7f3",
  storageBucket: "wealthwise-5b7f3.appspot.com",  // Corrected the storage bucket URL
  messagingSenderId: "392896255653",
  appId: "1:392896255653:web:87bce173b6da6beaa25f4c",
  measurementId: "G-Y1471VVWGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };
