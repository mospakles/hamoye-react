// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import ReactObserver from 'react-event-observer';

const firebaseConfig = {
  apiKey: "AIzaSyD2x5Ztv2ErlP7yaaEDyRUAttvLU-H2WuQ",
  authDomain: "airportflight-202ce.firebaseapp.com",
  projectId: "airportflight-202ce",
  storageBucket: "airportflight-202ce.appspot.com",
  messagingSenderId: "19444695193",
  appId: "1:19444695193:web:27bcde8a43947db8dab808",
  measurementId: "G-Q568Y465FZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firebaseObserver = ReactObserver();

auth.onAuthStateChanged(function(user) {
    firebaseObserver.publish("authStateChanged", loggedIn())
});
export function loggedIn() {
    return !!auth.currentUser;
}