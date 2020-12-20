//Import Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

//Firebase Config Object
let firebaseConfig = {
    apiKey: "AIzaSyCW1JLAWF1JxrekF_T-HvvpXZvSYi43xyE",
    authDomain: "bookstore-69243.firebaseapp.com",
    projectId: "bookstore-69243",
    storageBucket: "bookstore-69243.appspot.com",
    messagingSenderId: "763280082388",
    appId: "1:763280082388:web:fa7179b8a764bef3e88241"
};

//Inicializar la app con los datos de configuracion
const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => {
      return app;
  };

  export const getFirestore = () => {
      return firebase.firestore();
  }

