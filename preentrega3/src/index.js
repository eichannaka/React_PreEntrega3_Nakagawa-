import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThKpjBwasaVSTtSa2Y5vjwo11UMHuaSU",
  authDomain: "reactcoderhouse-2bdef.firebaseapp.com",
  projectId: "reactcoderhouse-2bdef",
  storageBucket: "reactcoderhouse-2bdef.appspot.com",
  messagingSenderId: "395675922219",
  appId: "1:395675922219:web:8b96f8a56c8a0af8ed1f6e",
  measurementId: "G-0B8HYNSP1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
