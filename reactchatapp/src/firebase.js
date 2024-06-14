// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb0Iy91zWasZfH1gOjUN4666RwO3arORY",
    authDomain: "reactchatapp-3e34c.firebaseapp.com",
    projectId: "reactchatapp-3e34c",
    storageBucket: "reactchatapp-3e34c.appspot.com",
    messagingSenderId: "1027042877679",
    appId: "1:1027042877679:web:96f2038700d206c6363b1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)