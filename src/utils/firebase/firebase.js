import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "v-tube-50bcf.firebaseapp.com",
  projectId: "v-tube-50bcf",
  storageBucket: "v-tube-50bcf.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId ,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
