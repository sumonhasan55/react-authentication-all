// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCQnVpHV-EbU3rs9eAepQfKoseP_h_YTE",
  authDomain: "email-password-login-ae746.firebaseapp.com",
  projectId: "email-password-login-ae746",
  storageBucket: "email-password-login-ae746.appspot.com",
  messagingSenderId: "215437222483",
  appId: "1:215437222483:web:bc1b55a6a506647e741ca6",
  measurementId: "G-0GM3CNKSTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;