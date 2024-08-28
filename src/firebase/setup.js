import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBft-K07bJLSvmhQbsoD56NHhLVRplE4u8",
  authDomain: "clones-news.firebaseapp.com",
  projectId: "clones-news",
  storageBucket: "clones-news.appspot.com",
  messagingSenderId: "991145704522",
  appId: "1:991145704522:web:053231f0474392f306fab3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
