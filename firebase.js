// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0-f8b7ZbxGUHabgkvvXvtiIvV3itd5R8",
  authDomain: "crop-monitoringsystem.firebaseapp.com",
  databaseURL: "https://crop-monitoringsystem-default-rtdb.firebaseio.com",
  projectId: "crop-monitoringsystem",
  storageBucket: "crop-monitoringsystem.appspot.com",
  messagingSenderId: "500935338522",
  appId: "1:500935338522:web:8e765161e99047d5ea3fa3",
  measurementId: "G-67QN7GM1NM"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;