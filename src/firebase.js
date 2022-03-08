// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1OBh4nAk4vcxDWTR7xNvpS3EEZETSNDA",
  authDomain: "fb-crud-ffa52.firebaseapp.com",
  projectId: "fb-crud-ffa52",
  storageBucket: "fb-crud-ffa52.appspot.com",
  messagingSenderId: "10055064999",
  appId: "1:10055064999:web:bb55f04b7a3bc92dde6a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);