import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from  "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCHKKj8gx2cirNC5Mebk599xqswitMRxdE",
  authDomain: "clone-d8b4b.firebaseapp.com",
  projectId: "clone-d8b4b",
  storageBucket: "clone-d8b4b.appspot.com",
  messagingSenderId: "666784923922",
  appId: "1:666784923922:web:4dba203b76d266d539b3cb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;