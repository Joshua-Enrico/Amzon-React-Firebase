// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu-s7R0lNyQHDXOMA9yBcAc2NFE17iQbo",
  authDomain: "clone-ce166.firebaseapp.com",
  projectId: "clone-ce166",
  storageBucket: "clone-ce166.appspot.com",
  messagingSenderId: "1051154686050",
  appId: "1:1051154686050:web:0a405470a1da9898ed313b",
  measurementId: "G-M9HG7S49E0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth();

export { db, auth };