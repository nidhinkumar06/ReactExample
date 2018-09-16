import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { fbConfig } from '../config';

const config =
  process.env.NODE_ENV === 'production'
    ? fbConfig.prodConfig
    : fbConfig.devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export { auth, db };
