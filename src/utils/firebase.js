// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz8fz7e3z46ZPyS5A-5oYKo2HItyrLNp8",
  authDomain: "netflixgpt-f9630.firebaseapp.com",
  projectId: "netflixgpt-f9630",
  storageBucket: "netflixgpt-f9630.appspot.com",
  messagingSenderId: "200046280527",
  appId: "1:200046280527:web:d02166718bf3ed1aa3cf3a",
  measurementId: "G-49QGMV16ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
