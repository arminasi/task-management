import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9S53Rq9JnVSfTQ6Erbjat_0ZzyY5B9b8",
  authDomain: "tm-project-1b72c.firebaseapp.com",
  projectId: "tm-project-1b72c",
  storageBucket: "tm-project-1b72c.appspot.com",
  messagingSenderId: "344116742739",
  appId: "1:344116742739:web:222cfc9a040cda01c4d4a6",
  measurementId: "G-V1TKXK6MXF"
};

//init app

firebase.initializeApp(firebaseConfig);

//init services

const projectFireStore = firebase.firestore()

export { projectFireStore };