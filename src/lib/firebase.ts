// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqaLt_4S86TU34oWyX0tHBl6YNG6tN7BA",
  authDomain: "projectj-774f4.firebaseapp.com",
  projectId: "projectj-774f4",
  storageBucket: "projectj-774f4.firebasestorage.app",
  messagingSenderId: "1050658684847",
  appId: "1:1050658684847:web:8d24b712e7e23a73ca395a",
  measurementId: "G-LFEQCENJWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export {app}