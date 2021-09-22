import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDKeY_9avPVW5hZ7u2NjczaaHPfKJ2mNXs",
    authDomain: "ch-react-e-commerce.firebaseapp.com",
    projectId: "ch-react-e-commerce",
    storageBucket: "ch-react-e-commerce.appspot.com",
    messagingSenderId: "607145663507",
    appId: "1:607145663507:web:4f8465b11ff0931fb933e6"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}