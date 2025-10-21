import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace these config values with your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyBQ5g9NUV4zL6-7KgFRn5If_9UyhSiXPkA",
  authDomain: "theaiadvisoryboard.firebaseapp.com",
  projectId: "theaiadvisoryboard",
  storageBucket: "theaiadvisoryboard.firebasestorage.app",
  messagingSenderId: "453439087143",
  appId: "1:453439087143:web:6abefdb1ca5d9d03ba2402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Authentication instance
export const auth = getAuth(app);