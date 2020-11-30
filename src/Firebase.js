
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdzAX_Xt-1oY_OM25M3JoIHJ0s0iWyDmY",
    authDomain: "twitter-clone-5f101.firebaseapp.com",
    databaseURL: "https://twitter-clone-5f101.firebaseio.com",
    projectId: "twitter-clone-5f101",
    storageBucket: "twitter-clone-5f101.appspot.com",
    messagingSenderId: "239255509110",
    appId: "1:239255509110:web:d32cf67a3049891138a757",
    measurementId: "G-KF52YYJC6W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;