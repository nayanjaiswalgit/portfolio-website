// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from 'firebase/app';
import 'firebase/storage';
import { getStorage } from "firebase/storage";
import {getDatabase} from 'firebase/database'
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

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

export const database = getDatabase();
export const storage = getStorage(app);
export default firebase 
