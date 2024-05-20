import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvO2a86ZPvAXF5_X61piZJ2GYC3oK7itY",
  authDomain: "auth-2b6fa.firebaseapp.com",
  projectId: "auth-2b6fa",
  storageBucket: "auth-2b6fa.appspot.com",
  messagingSenderId: "1094835128342",
  appId: "1:1094835128342:web:7eac00ea6d9dccd38f4d37"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth}