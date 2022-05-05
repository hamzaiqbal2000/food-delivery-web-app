import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJuGnfka2FjnlLH-SI6eiTUwNm7e993SM",
  authDomain: "restaurantapp-b1c0d.firebaseapp.com",
  databaseURL: "https://restaurantapp-b1c0d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-b1c0d",
  storageBucket: "restaurantapp-b1c0d.appspot.com",
  messagingSenderId: "205100368941",
  appId: "1:205100368941:web:e4fde66cbedf866704e4a4",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
