import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA2LoEtSzDCXpj4vCwDDjXnAfBiJJ2GtP4",
  authDomain: "reaclogin.firebaseapp.com",
  databaseURL: "https://reaclogin.firebaseio.com",
  projectId: "reaclogin",
  storageBucket: "reaclogin.appspot.com",
  messagingSenderId: "564105641451"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
console.log('auth is', auth);
export { db, auth };
