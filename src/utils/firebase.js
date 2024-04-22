// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-c599d.firebaseapp.com",
  projectId: "netflixgpt-c599d",
  storageBucket: "netflixgpt-c599d.appspot.com",
  messagingSenderId: "26724297820",
  appId: "1:26724297820:web:8729387a1a4edb43faca99",
  measurementId: "G-ZMEH0WX609",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
