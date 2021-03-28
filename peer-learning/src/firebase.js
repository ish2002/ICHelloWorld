import firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIKw_1g5OyqiZWnGxx0VwD2_L1eGeg4sY",
    authDomain: "peerlearningwebapp.firebaseapp.com",
    databaseURL: "https://peerlearningwebapp-default-rtdb.firebaseio.com",
    projectId: "peerlearningwebapp",
    storageBucket: "peerlearningwebapp.appspot.com",
    messagingSenderId: "162813454040",
    appId: "1:162813454040:web:72c1ded1184d80496e59ad",
    measurementId: "G-8TMWN54PBG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;