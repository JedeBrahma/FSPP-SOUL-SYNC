// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpHsV-WaeYlFwFRfEsPNanEaTz0KQt4RE",
  authDomain: "soul-sync-b508a.firebaseapp.com",
  projectId: "soul-sync-b508a",
  storageBucket: "soul-sync-b508a.appspot.com",
  messagingSenderId: "26090098353",
  appId: "1:26090098353:web:888936e4e89ca5940a1c90",
  measurementId: "G-TD2N4PSGJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics();

export const auth = getAuth();

auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    try {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
            const user = res.user;
            console.log(user)
        })
    } catch (err) {
        console.log(err)
    }
}

export const signOut = async () => {
    try {
        await auth.signOut();
        alert("you are signed out")
    } catch(err) {
        console.log(err)
    }
}