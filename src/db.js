

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD8yBEq5OVwWTmNs5A-qIvxeHIjWSsELvs",
    authDomain: "varpdatabase.firebaseapp.com",
    databaseURL: "https://varpdatabase-default-rtdb.firebaseio.com",
    projectId: "varpdatabase",
    storageBucket: "varpdatabase.appspot.com",
    messagingSenderId: "78869428640",
    appId: "1:78869428640:web:90fcc318e388f4ab0e0cc5",
    measurementId: "G-PCHT1CQYS0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

