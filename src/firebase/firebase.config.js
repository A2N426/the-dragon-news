// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvYD5QrWw5Q6G-Ekn5ktlVbiCkRGHXQ8w",
  authDomain: "the-dragon-news-2af32.firebaseapp.com",
  projectId: "the-dragon-news-2af32",
  storageBucket: "the-dragon-news-2af32.appspot.com",
  messagingSenderId: "689255483004",
  appId: "1:689255483004:web:f05afaafeefe135a4aebf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;