import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyCpSBf4Lqi6ft5IAxldmz3lJ0GORHDzqjs",
    authDomain: "story-hub-app-91a41.firebaseapp.com",
    projectId: "story-hub-app-91a41",
    storageBucket: "story-hub-app-91a41.appspot.com",
    messagingSenderId: "701765782614",
    appId: "1:701765782614:web:2dd4d776ecac64f698bff7"
  };
  // Initialize firebase;
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();