
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbsdumuAJWazNUasBm_KVsAlzAyP9q9fM",
  authDomain: "react-project-9a10a.firebaseapp.com",
  projectId: "react-project-9a10a",
  storageBucket: "react-project-9a10a.firebasestorage.app",
  messagingSenderId: "791025713209",
  appId: "1:791025713209:web:8671151811c4e6f00c0de8",
  measurementId: "G-5NZRCVJRF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};