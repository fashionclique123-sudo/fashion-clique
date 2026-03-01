import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCi1xjKpEqjPKfEffqjFZ9Q-61INIyvqLE",
  authDomain: "fashion-clique.firebaseapp.com",
  databaseURL: "https://fashion-clique-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fashion-clique",
  storageBucket: "fashion-clique.firebasestorage.app",
  messagingSenderId: "136880158986",
  appId: "1:136880158986:web:cd0cd16849979ebf68a2f3",
  measurementId: "G-G938C4R8TV"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
