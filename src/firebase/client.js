// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDCGvV4t2ONSN7zaUJz0zWq75TO8-TlUI",
  authDomain: "coder-records-bruno.firebaseapp.com",
  projectId: "coder-records-bruno",
  storageBucket: "coder-records-bruno.appspot.com",
  messagingSenderId: "1022609096108",
  appId: "1:1022609096108:web:02b21ae07a740aeb3bce09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
