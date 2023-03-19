// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3EgBohzu4PBtRk7lxGqbZPxxltLiELz0",
    authDomain: "chad-1fb84.firebaseapp.com",
    projectId: "chad-1fb84",
    storageBucket: "chad-1fb84.appspot.com",
    messagingSenderId: "828610873152",
    appId: "1:828610873152:web:c366dc5a00eedeb1665ca5",
    measurementId: "G-28GX8NZ31R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);