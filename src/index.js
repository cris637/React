import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPvd1MZASvO-UofwyJtdZD44Dpg27usAg",
  authDomain: "react-61f8c.firebaseapp.com",
  projectId: "react-61f8c",
  storageBucket: "react-61f8c.appspot.com",
  messagingSenderId: "579517916236",
  appId: "1:579517916236:web:ac3c9349093702228940e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
//
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();