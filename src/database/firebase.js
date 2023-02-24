  import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBOIeusJMln3QijVvWihAj8f1Aqg4LQ2uY",
    authDomain: "barber-app-deaad.firebaseapp.com",
    projectId: "barber-app-deaad",
    storageBucket: "barber-app-deaad.appspot.com",
    messagingSenderId: "597906618547",
    appId: "1:597906618547:web:9d4984abde1b40268458c6",
    measurementId: "G-2VGM4RJNJG"
  };

  // Initialize Firebase
 let fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();