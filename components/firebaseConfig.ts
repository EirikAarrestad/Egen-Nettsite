// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFKVABsg4mA_OZGstv7hTWMcDmFiPaBPM",
    authDomain: "eirikwebsite.firebaseapp.com",
    projectId: "eirikwebsite",
    storageBucket: "eirikwebsite.appspot.com",
    messagingSenderId: "600962697133",
    appId: "1:600962697133:web:bbd4aecc33daaa6f5b0324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);