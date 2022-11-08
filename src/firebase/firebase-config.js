// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8f2lHWsLZrz01G0TK5jRLblKNLMCCCJM",
  authDomain: "lil-pot.firebaseapp.com",
  projectId: "lil-pot",
  storageBucket: "lil-pot.appspot.com",
  messagingSenderId: "1050132146786",
  appId: "1:1050132146786:web:c8db6c1fded9e51e99ff3b",
  measurementId: "G-PYE9G2X5D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);