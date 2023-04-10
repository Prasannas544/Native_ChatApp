// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrdO4lYaLIlOseBbNaskK9lQs3Oud5P70",
    authDomain: "chatapp-9e795.firebaseapp.com",
    projectId: "chatapp-9e795",
    storageBucket: "chatapp-9e795.appspot.com",
    messagingSenderId: "113404466725",
    appId: "1:113404466725:web:b6e4e0e57364c4905211cc",
    measurementId: "G-ZZDXR2FWMV"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth()
export const database = getFirestore()