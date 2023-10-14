import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC12BTDkU7q9-D_vAQ--ttsQ-WpbtmHHu4",
  authDomain: "chats-34193.firebaseapp.com",
  projectId: "chats-34193",
  storageBucket: "chats-34193.appspot.com",
  messagingSenderId: "548927473379",
  appId: "1:548927473379:web:c387f93e89b1a119a3a7d6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
