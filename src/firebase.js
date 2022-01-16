// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAmTaKrMcNfFiHw_Z6eq4nSdzsoTK0X_g",
  authDomain: "clone-ddca1.firebaseapp.com",
  projectId: "clone-ddca1",
  storageBucket: "clone-ddca1.appspot.com",
  messagingSenderId: "728251710992",
  appId: "1:728251710992:web:cc69efce6df9636adb5495",
  measurementId: "G-RVCVCVH5S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);