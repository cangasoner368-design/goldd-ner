import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5iB_kVS8zOtruK90ir6vDatIskewz0mU",
  authDomain: "goldoner-6682a.firebaseapp.com",
  projectId: "goldoner-6682a",
  storageBucket: "goldoner-6682a.firebasestorage.app",
  messagingSenderId: "397837198552",
  appId: "1:397837198552:web:bc83c9f482242d588f63ad",
  measurementId: "G-QFYWKW8X22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);