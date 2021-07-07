import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyChNy9opDVXs_kWNlUh2PGD8ThIVABdK5Y",
    authDomain: "e-clone-3d4a2.firebaseapp.com",
    projectId: "e-clone-3d4a2",
    storageBucket: "e-clone-3d4a2.appspot.com",
    messagingSenderId: "986770289703",
    appId: "1:986770289703:web:9f665f347769a3a5acca02",
    measurementId: "G-P7TS7JXN25"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { db , provider, auth}