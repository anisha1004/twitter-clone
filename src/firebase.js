import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDI2HpDEEJWeKowbprZRTcIabZM_JB3NPY",
    authDomain: "twitter-clone-cba67.firebaseapp.com",
    projectId: "twitter-clone-cba67",
    storageBucket: "twitter-clone-cba67.appspot.com",
    messagingSenderId: "732710421227",
    appId: "1:732710421227:web:2a37aafebf00a3fe3e34ae",
    measurementId: "G-SEP0CZQHYX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;