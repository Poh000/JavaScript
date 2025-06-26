// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsxzdcG6Lx5qvEjHm15H2DY1jMAH5F46A",
    authDomain: "fir-27496.firebaseapp.com",
    databaseURL: "https://fir-27496-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-27496",
    storageBucket: "fir-27496.firebasestorage.app",
    messagingSenderId: "704248799715",
    appId: "1:704248799715:web:e8c995a7ee7bf4b40f40d6",
    measurementId: "G-JWYC5E79LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Créer la référence à la BDD firebase
const bdd = getDatabase(app);
const dbRef = ref(bdd);
dbRef.child("users");