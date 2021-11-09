import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ1NzL1r3qZ6FkHYc7Up7IndWUKsLnN5o",
  authDomain: "uber-next-clone-8aeae.firebaseapp.com",
  projectId: "uber-next-clone-8aeae",
  storageBucket: "uber-next-clone-8aeae.appspot.com",
  messagingSenderId: "255384403873",
  appId: "1:255384403873:web:0afc1ae7dbf8aae41d95e0",
  measurementId: "G-TWVFQ8TBVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth  = getAuth()

export{ app, provider, auth}


