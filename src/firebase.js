import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
