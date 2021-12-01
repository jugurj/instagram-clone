import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "instagram-clone-c9a4b.firebaseapp.com",
  projectId: "instagram-clone-c9a4b",
  storageBucket: "instagram-clone-c9a4b.appspot.com",
  messagingSenderId: "971500248059",
  appId: "1:971500248059:web:97fc448f9554548f60c95e",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
