import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDSamvlTORiMc0uVwX7NEJNTbP05X1VLU0",
  authDomain: "project-71-ef164.firebaseapp.com",
  projectId: "project-71-ef164",
  storageBucket: "project-71-ef164.appspot.com",
  messagingSenderId: "359899609484",
  appId: "1:359899609484:web:5ded62bc76c236c393bea9"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

