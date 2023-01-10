import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXXkLVDrN_PJziYj0KgD2aOFa3Ttl6ZCo",
  authDomain: "hackaton-3-e55b3.firebaseapp.com",
  projectId: "hackaton-3-e55b3",
  storageBucket: "hackaton-3-e55b3.appspot.com",
  messagingSenderId: "685728276608",
  appId: "1:685728276608:web:262932166334faa9474665",
  measurementId: "G-YGWQWQJS4X",
};

const fireBase = firebase.initializeApp(firebaseConfig);
export default fireBase;
