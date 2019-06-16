import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_2vbdvqJblkjRSc5aQLwaF2bqr3dj7T0",
    authDomain: "e-ronae-mario-plan.firebaseapp.com",
    databaseURL: "https://e-ronae-mario-plan.firebaseio.com",
    projectId: "e-ronae-mario-plan",
    storageBucket: "e-ronae-mario-plan.appspot.com",
    messagingSenderId: "826418149542",
    appId: "1:826418149542:web:c510f4b69ccd5aff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;