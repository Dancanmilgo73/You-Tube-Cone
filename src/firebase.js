// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";

/* for authentication */
import "firebase/compat/auth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const firebaseConfig = {
  apiKey: "AIzaSyCEAn5-TbwgXbH1nmZHwWatbUrm1C9TrhY",
  authDomain: "clone-87dad.firebaseapp.com",
  projectId: "clone-87dad",
  storageBucket: "clone-87dad.appspot.com",
  messagingSenderId: "616140565998",
  appId: "1:616140565998:web:9f1a17fb82351eff8cb2ff",
  measurementId: "G-BDQ1J0BL8J",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
