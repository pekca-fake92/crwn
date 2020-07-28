import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbd--7AflrLARMKauxZCIsjBsjTarpllQ",
    authDomain: "test-project-001-df1cb.firebaseapp.com",
    databaseURL: "https://test-project-001-df1cb.firebaseio.com",
    projectId: "test-project-001-df1cb",
    storageBucket: "test-project-001-df1cb.appspot.com",
    messagingSenderId: "1005289704185",
    appId: "1:1005289704185:web:aea3eb64286ef89e8b7028",
    measurementId: "G-T520J458ZD"
  };


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 