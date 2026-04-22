// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl72lxAzVZDAdUehCV-cXMXG9uOiq_0hQ",
  authDomain: "fir-test-e5281.firebaseapp.com",
  projectId: "fir-test-e5281",
  storageBucket: "fir-test-e5281.firebasestorage.app",
  messagingSenderId: "669377993673",
  appId: "1:669377993673:web:3564367f6256e76e82e618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
