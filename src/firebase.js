// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7tG4xYpwFwYAX11po4JewgQ6fYKcu5mM",
    authDomain: "quiz-app-8e90b.firebaseapp.com",
    projectId: "quiz-app-8e90b",
    storageBucket: "quiz-app-8e90b.appspot.com",
    messagingSenderId: "641619742353",
    appId: "1:641619742353:web:f74b808e6c609166743930"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase 인증 및 Firestore 참조
export const auth = getAuth(app);
export const db = getFirestore(app);
