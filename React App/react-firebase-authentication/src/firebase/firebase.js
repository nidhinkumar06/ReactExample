import firebase from 'firebase/app';
import 'firebase/auth';

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

const auth = firebase.auth();

export {auth,};
