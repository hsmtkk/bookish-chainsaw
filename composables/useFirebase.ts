import { initializeApp } from "firebase/app";

export const useFirebase = () => {
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
    return app
}