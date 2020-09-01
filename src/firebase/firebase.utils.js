import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAq78f9Ilhr0UN5qBnXPj-yPzxaonzJXI4",
  authDomain: "crwn-db-b17e7.firebaseapp.com",
  databaseURL: "https://crwn-db-b17e7.firebaseio.com",
  projectId: "crwn-db-b17e7",
  storageBucket: "crwn-db-b17e7.appspot.com",
  messagingSenderId: "553049113514",
  appId: "1:553049113514:web:1a782f73c86daf225ce1d3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
