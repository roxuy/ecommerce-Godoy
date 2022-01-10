// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv-Fscwy7KJbA40K3hcWjooVAv-BRSlog",
  authDomain: "e-commercegodoy.firebaseapp.com",
  projectId: "e-commercegodoy",
  storageBucket: "e-commercegodoy.appspot.com",
  messagingSenderId: "669356132697",
  appId: "1:669356132697:web:f9a99a32006253e60d6448",
  measurementId: "G-QD6N3VCLRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);