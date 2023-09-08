// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2zwozIbuytSl2SAOTMI2pOTX_37q7BnU",
  authDomain: "coderhouse-49c00.firebaseapp.com",
  projectId: "coderhouse-49c00",
  storageBucket: "coderhouse-49c00.appspot.com",
  messagingSenderId: "934051596101",
  appId: "1:934051596101:web:3e249c9dfe7c9a5764e02c",
  measurementId: "G-J8MG3PWLBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

