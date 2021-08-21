import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyBku_1SzCq2vB50kR1iHIxJKO4GDGTPk",
    authDomain: "crwn-db-fdff9.firebaseapp.com",
    projectId: "crwn-db-fdff9",
    storageBucket: "crwn-db-fdff9.appspot.com",
    messagingSenderId: "406518948362",
    appId: "1:406518948362:web:0171c63fc38ab6a4f5b5f3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
