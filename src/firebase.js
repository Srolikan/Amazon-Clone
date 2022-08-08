import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzzmLPSQqSb5tt0t0ZbuYvINrqqYecEPo",
    authDomain: "clone-b5268.firebaseapp.com",
    projectId: "clone-b5268",
    storageBucket: "clone-b5268.appspot.com",
    messagingSenderId: "898243159821",
    appId: "1:898243159821:web:a672edbd36ca55dd933244",
    measurementId: "G-CKP4NNTS75"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export default { db, auth }