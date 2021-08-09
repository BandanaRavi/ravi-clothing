import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4gfofDjF-P2NOy3MTzDT-s4DDxC1fZ2E",
    authDomain: "ravi-clothing.firebaseapp.com",
    projectId: "ravi-clothing",
    storageBucket: "ravi-clothing.appspot.com",
    messagingSenderId: "209587113347",
    appId: "1:209587113347:web:f34504552b7cb5ace5bab6",
    measurementId: "G-VC7VJRV9Q7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;