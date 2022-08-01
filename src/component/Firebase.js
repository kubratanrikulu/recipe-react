// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cQYCquQVxlV6fDPjWcWRpopDjt6yi40",
  authDomain: "recipe-app-2999f.firebaseapp.com",
  projectId: "recipe-app-2999f",
  storageBucket: "recipe-app-2999f.appspot.com",
  messagingSenderId: "444004414158",
  appId: "1:444004414158:web:4d26de08ae94bec765969f",
  measurementId: "G-NC179NFRZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);