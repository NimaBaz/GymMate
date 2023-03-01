import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNbQxd1PWwMcCT8yoMnZ8KcG6gm0OC9p0",
    authDomain: "tinder-clone-2dc84.firebaseapp.com",
    projectId: "tinder-clone-2dc84",
    storageBucket: "tinder-clone-2dc84.appspot.com",
    messagingSenderId: "446431790247",
    appId: "1:446431790247:web:ca510510d93ee927364782",
    measurementId: "G-X3780G4T5F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

