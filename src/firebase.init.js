// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCij6_Og12rJQzKTqKqjtKjR4Mgzkkp_zI",
  authDomain: "doctors-portal-f965c.firebaseapp.com",
  projectId: "doctors-portal-f965c",
  storageBucket: "doctors-portal-f965c.appspot.com",
  messagingSenderId: "633706010871",
  appId: "1:633706010871:web:5c805319ccb687c51fdbf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
