import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "Your Api Key",
  authDomain: "Your Domain",
  projectId: "Your Id",
  storageBucket: "",
  messagingSenderId: "",
  appId: "Your App Id",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);