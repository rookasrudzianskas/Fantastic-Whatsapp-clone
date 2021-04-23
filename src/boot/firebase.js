import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAJNCqiZn3aXs4CyMppK-O6KaO7Mc6-D4c",
  authDomain: "smackcha.firebaseapp.com",
  projectId: "smackcha",
  storageBucket: "smackcha.appspot.com",
  messagingSenderId: "935896514661",
  appId: "1:935896514661:web:a6fa4319c50772f03bc68c"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {firebaseAuth, firebaseDb}
