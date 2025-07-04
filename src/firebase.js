// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6GQ_n6RgSMqPoEjaQzYGvUbv3PsXONP8",
  authDomain: "react-chat-app-d6d3a.firebaseapp.com",
  projectId: "react-chat-app-d6d3a",
  storageBucket: "react-chat-app-d6d3a.firebasestorage.app",
  messagingSenderId: "1045299178885",
  appId: "1:1045299178885:web:fc735ec188952d97a868ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
