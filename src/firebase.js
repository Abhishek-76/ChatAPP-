import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyL6iK0LjvKuqJO4kXL9nTFhXNH2tvpkM",
  authDomain: "gambarachats.firebaseapp.com",
  projectId: "gambarachats",
  storageBucket: "gambarachats.appspot.com",
  messagingSenderId: "97628560898",
  appId: "1:97628560898:web:df722e7abf4c19188e511b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
