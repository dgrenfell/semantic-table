import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYrB0CkCfg-JNKqnnH8Rj-BmHqbFWtuI",
  authDomain: "verint-table.firebaseapp.com",
  projectId: "verint-table",
  storageBucket: "verint-table.appspot.com",
  messagingSenderId: "231628934734",
  appId: "1:231628934734:web:c2329ab4d437af5054bd1f",
  measurementId: "G-R1GRRZHF6K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
