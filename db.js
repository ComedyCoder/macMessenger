//Create firbase conntion and assign it to db object

import firebase from 'firebase';
import 'firebase/firestore'
 let config = {
    apiKey: "AIzaSyAJ9rybA-3-aojpEcvcSuu5dDK5r3-JZdA",
    authDomain: "listapp-1b273.firebaseapp.com",
    databaseURL: "https://listapp-1b273.firebaseio.com",
    projectId: "listapp-1b273",
    storageBucket: "listapp-1b273.appspot.com",
    messagingSenderId: "238506513823",
    appId: "1:238506513823:web:f63ec5417fff66d1f9d9aa",
    measurementId: "G-PRXWDJ2C0S"
    };
  firebase.initializeApp(config);
 
  const db = firebase;

 export default db;