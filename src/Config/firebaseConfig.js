import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA4SLKBqDkcroqqjdcDNwWiu6k6-TID9nA",
  authDomain: "zaman-olx.firebaseapp.com",
  projectId: "zaman-olx",
  storageBucket: "zaman-olx.appspot.com",
  messagingSenderId: "157722495425",
  appId: "1:157722495425:web:df866d19d85427dd6e0740",
  measurementId: "G-LBBC7EYGEQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();  


// export const auth = firebase.auth();