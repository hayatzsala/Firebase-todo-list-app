// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYeeYFAzHaMO8KPBPQbzz1Y6HW3dr3TqA",
  authDomain: "room12-activity.firebaseapp.com",
  projectId: "room12-activity",
  storageBucket: "room12-activity.appspot.com",
  messagingSenderId: "1010682814660",
  appId: "1:1010682814660:web:12d3091f6064a8cc3be991",
  measurementId: "G-V4HK050SWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
