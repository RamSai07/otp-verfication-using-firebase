// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyCXLjG8qA0SLnLTRz2OqVdk2ERsFdcCcIk",
  authDomain: "otpgen-162af.firebaseapp.com",
  projectId: "otpgen-162af",
  storageBucket: "otpgen-162af.appspot.com",
  messagingSenderId: "73935948084",
  appId: "1:73935948084:web:5602d5fe44bd3484d43d61",
  measurementId: "G-2KLKK62KK8"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
