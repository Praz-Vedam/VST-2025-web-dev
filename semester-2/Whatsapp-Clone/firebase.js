// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1o-TzucrMbFnN9ThYM3nWry51vBiW5Ns",
  authDomain: "whastappclone12.firebaseapp.com",
  projectId: "whastappclone12",
  storageBucket: "whastappclone12.firebasestorage.app",
  messagingSenderId: "480838518548",
  appId: "1:480838518548:web:85d27cd1ef029ccd96a401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};