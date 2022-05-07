// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMCd7wFHT7SHUJ-UwCkM7LbvTbckBfACE",
  authDomain: "fruits-warehouse-247d5.firebaseapp.com",
  projectId: "fruits-warehouse-247d5",
  storageBucket: "fruits-warehouse-247d5.appspot.com",
  messagingSenderId: "960028694783",
  appId: "1:960028694783:web:e94ece50afcccab9e814ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;