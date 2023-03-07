import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6i1aH8xLK7l79rsV9LZluS2rZCIkV9aQ",
  authDomain: "happy-stay-landing.firebaseapp.com",
  projectId: "happy-stay-landing",
  storageBucket: "happy-stay-landing.appspot.com",
  messagingSenderId: "963371201522",
  appId: "1:963371201522:web:cff73f45bef8a06e7ef16b",
};

// initialize firebase

firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
