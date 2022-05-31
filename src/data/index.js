// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
  Timestamp,
  addDoc,

} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPvd1MZASvO-UofwyJtdZD44Dpg27usAg",
  authDomain: "react-61f8c.firebaseapp.com",
  projectId: "react-61f8c",
  storageBucket: "react-61f8c.appspot.com",
  messagingSenderId: "579517916236",
  appId: "1:579517916236:web:ac3c9349093702228940e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {
  const miColection = collection(firestoreDB, "topindumentaria");

  const ropaSnap = await getDocs(miColection);

  return ropaSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItemsByTalle(categoryId) {
  const miColection = collection(firestoreDB, "topindumentaria");
  const queryRopa = query(miColection, where("talle", "==", categoryId));

  const ropaSnap = await getDocs(queryRopa);

  return ropaSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItem(id) {
  const miColection = collection(firestoreDB, "topindumentaria");
  const ropaRef = doc(miColection, id);
  const ropaSnap = await getDoc(ropaRef);

  return { ...ropaSnap.data(), id: ropaSnap.id };
}

export async function createBuyOrder(orderData) {
  
  const buyTimestamp = Timestamp.now();
  const orderWithDate = {
    ...orderData,
    date: buyTimestamp
  };

   const miColection = collection(firestoreDB, "buyOrders")
   const orderDoc = await addDoc(miColection, orderWithDate)
  console.log("Orden lista con ID:", orderDoc.id);
  
}