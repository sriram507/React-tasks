// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO1novZSkNlJWvSL1q5DbV3hmEG_8-2KM",
  authDomain: "ptroutes-bd6da.firebaseapp.com",
  projectId: "ptroutes-bd6da",
  storageBucket: "ptroutes-bd6da.firebasestorage.app",
  messagingSenderId: "192003927938",
  appId: "1:192003927938:web:ade86e17cc865560e5e99b",
  measurementId: "G-L6P6FLRLLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);