import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBqiuHghD1Pdru5kJg6WhZxbLrDK_vqi64",
    authDomain: "tarefas-7d206.firebaseapp.com",
    projectId: "tarefas-7d206",
    storageBucket: "tarefas-7d206.appspot.com",
    messagingSenderId: "1027891139089",
    appId: "1:1027891139089:web:45d7cde116b63c8bdc57b0"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase