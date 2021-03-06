import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXvNiyE9MOnMcL-RU8ycb9-UmuDM2sg-U",
    authDomain: "nice-clothing-db.firebaseapp.com",
    projectId: "nice-clothing-db",
    storageBucket: "nice-clothing-db.appspot.com",
    messagingSenderId: "723768475060",
    appId: "1:723768475060:web:d5c0aaff13392b9ad306e1"
};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
}