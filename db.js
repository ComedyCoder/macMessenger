//Create firbase conntion and assign it to db object

import firebase from 'firebase';
import 'firebase/firestore'
 let config = {
    apiKey: "AIzaSyDuiyR0zFFMyJjdXcttZOAzHHMmTIJY0jM",
    authDomain: "mac-messaginer-db.firebaseapp.com",
    databaseURL: "https://mac-messaginer-db.firebaseio.com",
    projectId: "mac-messaginer-db",
    storageBucket: "mac-messaginer-db.appspot.com",
    messagingSenderId: "454959700494",
    appId: "1:454959700494:web:51c98cef1a1b48ea5f3a5f"
    };
  firebase.initializeApp(config);
 
  export const dbAuth = firebase.auth();

  export const dbFireStore = firebase.firestore();