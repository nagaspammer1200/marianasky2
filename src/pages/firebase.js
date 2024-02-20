import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage,ref } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaCsQkKO_Ll2dFrquZS8l9YJRR1m_V8m8",
  authDomain: "mariana-sky.firebaseapp.com",
  projectId: "mariana-sky",
  storageBucket: "mariana-sky.appspot.com",
  messagingSenderId: "323696740592",
  appId: "1:323696740592:web:8137393ef63a77655b9a35",
  storageBucket:"gs://mariana-sky.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
const storage = getStorage();
const storageRef = ref(storage);
const spaceRef = ref(storage, 'images/qp.jpg');
