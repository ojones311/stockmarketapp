import secrets from '../secrets.js'
import firebase from 'firebase/app'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyAvsAb2NFNpHdsjzNVrjnpOqVMIurpT0Vs",
    authDomain: secrets.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: secrets.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: secrets.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: secrets.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: secrets.REACT_APP_FIREBASE_APP_ID,
    measurementId: secrets.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  const myApp = firebase.initializeApp(firebaseConfig)

  
  export const auth = myApp.auth();