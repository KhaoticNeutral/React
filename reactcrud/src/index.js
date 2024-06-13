import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAnalytics } from "firebase/analytics";

var config= {
  apiKey: "AIzaSyB-L56UMsk76WUPyjwegElhmaHFlZGCV1g",
  authDomain: "crudproject-bd0fb.firebaseapp.com",
  projectId: "crudproject-bd0fb",
  storageBucket: "crudproject-bd0fb.appspot.com",
  messagingSenderId: "763644593437",
  appId: "1:763644593437:web:d3a5774333f2b00ccb0df4"
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
