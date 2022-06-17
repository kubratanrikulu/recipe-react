// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6k62ctx5N8Gn7Vh2mQJJhHjXkbJpLUxc",
  authDomain: "recipe-react-9f4cb.firebaseapp.com",
  projectId: "recipe-react-9f4cb",
  storageBucket: "recipe-react-9f4cb.appspot.com",
  messagingSenderId: "634692112405",
  appId: "1:634692112405:web:a018ee62b126b0dc51be1c",
  measurementId: "G-J61PP8HPD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);