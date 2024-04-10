// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlBG2AV4CeYHZXbw-xN67nE8764UBGB84",
  authDomain: "ecs506u-prototype-app-3d600.firebaseapp.com",
  projectId: "ecs506u-prototype-app-3d600",
  storageBucket: "ecs506u-prototype-app-3d600.appspot.com",
  messagingSenderId: "1090334193424",
  appId: "1:1090334193424:web:b4f97f45f8771d7c145795",
  measurementId: "G-VJ3J94RF0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
