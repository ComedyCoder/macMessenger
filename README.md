# macMessenger
A messenger app developed with React Native and Firebase

## Setup 

### Install Epxo
using npm or yarn in your terminal run the commend `npm install expo-cli --global`

### Create Firestorm database in Firebase
1. Go to [firebase.google.com](https://console.firebase.google.com/)
2. Add a new Project
3. Select`Databse`in the menu, then select `create databae`
4. Select `start in text mode` for now
5. Go to the menu and select `Authentication`
6. In the `Users` Tab select the button `set up sign in method`
7. Enable `Email/Password` and DO NOT enable "Email link (passwordless sign-in)"
8. Go back to the `Users` Tab and add 2 differnt users. 
(Passwords must be 6 characters long)

### Connect React Native application to Firebase  
1. Select `Project Overview` or `settings` In the menu
2. From the "add a app" options (android, ios or web) select `web`
3. Give the app a nickname.
4. then you will be given a script, copy the inside of the `firebaseConfig` variable 
e.g:

```javascript
var firebaseConfig = {
    apiKey: "AIzaSyDPAwwiqBaD4GVyZxGwx-jWP4mjYd29iWc",
    authDomain: "testing-b58c2.firebaseapp.com",
    databaseURL: "https://testing-b58c2.firebaseio.com",
    projectId: "testing-b58c2",
    storageBucket: "testing-b58c2.appspot.com",
    messagingSenderId: "713882179270",
    appId: "1:713882179270:web:f01b6da43127b55b6169c7",
    measurementId: "G-QW6NQ8ECEL"
  };
```

5. Clone the repo
6. Inside the project open the `db.js` file
7. Paste the script inside the `config` variable
8. open a Terminal cd into the project and run commend
   `npm install firebase --save`

---------- Setup Complete ----------

## Run the application on a smart phone
1. Download the Expo app from the app store or google play store
2. open a Terminal cd into the project and run commend
   `npm start` or `expo start`

### Android
Open the Exop app and scan the QR Code
The Messenger App will start to download 

### IOS 
Open the Expo app
Then open the Camara app and use that to scan the QR Code
a push notification will appear from Expo, press it
The Messenger App will start to download 
