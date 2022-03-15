import firebase from 'firebase/compat/app'
import "firebase/compat/auth"



const firebaseConfig = {
    apiKey: "AIzaSyB58mOvOWUpoiPATAFY9F8CicneklHmMOU",
    authDomain: "react-redux-login-bc584.firebaseapp.com",
    projectId: "react-redux-login-bc584",
    storageBucket: "react-redux-login-bc584.appspot.com",
    messagingSenderId: "814836955453",
    appId: "1:814836955453:web:13614e1f0ad56b37b72d54",
    measurementId: "G-GLQCQXLFPM"
  };


  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  const gooogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{auth,facebookAuthProvider,gooogleAuthProvider}