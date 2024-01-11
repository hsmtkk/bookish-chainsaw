// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzl4JrqZH0-ZMCbmGa_XKeezAovQ1Y0h8",
    authDomain: "bookish-chainsaw.firebaseapp.com",
    projectId: "bookish-chainsaw",
    storageBucket: "bookish-chainsaw.appspot.com",
    messagingSenderId: "341222826852",
    appId: "1:341222826852:web:20e8d7858da226453a5071",
    measurementId: "G-BGEN6LTLE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);