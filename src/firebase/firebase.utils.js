import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCAg--Gd1QSsspws3jrHUOUStfB2buDgM8",
    authDomain: "giddy-db.firebaseapp.com",
    projectId: "giddy-db",
    storageBucket: "giddy-db.appspot.com",
    messagingSenderId: "195411478694",
    appId: "1:195411478694:web:4a33b00024fbf03b180c67",
    measurementId: "G-JHJBFPHL03"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });     
        } catch (error) {
            console.log('error creating user', error);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export default firebase;

