// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY8wAkAjONxPa3uGQaohMhRVORhywBLKQ",
  authDomain: "custard-kmp.firebaseapp.com",
  databaseURL: "https://custard-kmp-default-rtdb.firebaseio.com",
  projectId: "custard-kmp",
  storageBucket: "custard-kmp.appspot.com",
  messagingSenderId: "566332137185",
  appId: "1:566332137185:web:199f7fa5508891bfd6e1a0",
  measurementId: "G-9RWTXRSCD3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
