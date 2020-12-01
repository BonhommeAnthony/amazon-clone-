import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9z-wCVLpTS8MXajnpNs_yhdHrGPGIhuo",
  authDomain: "clone-c693d.firebaseapp.com",
  databaseURL: "https://clone-c693d.firebaseio.com",
  projectId: "clone-c693d",
  storageBucket: "clone-c693d.appspot.com",
  messagingSenderId: "38109316265",
  appId: "1:38109316265:web:1c90209e8f0a2347b415b8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
