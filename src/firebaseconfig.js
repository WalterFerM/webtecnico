// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvXYF7XBTP50fi2i2G43lAdw4XBumWNHw",
  authDomain: "tecnicobga-3ffd7.firebaseapp.com",
  projectId: "tecnicobga-3ffd7",
  storageBucket: "tecnicobga-3ffd7.appspot.com",
  messagingSenderId: "429184872792",
  appId: "1:429184872792:web:d63d9fa99277198152b52d",
  measurementId: "G-190XD1RE2H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);