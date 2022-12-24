import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBc7ZK9GX_oNU96dW7ED5sqq7OY77x-yrY",
    authDomain: "chat-realtime-bd825.firebaseapp.com",
    projectId: "chat-realtime-bd825",
    storageBucket: "chat-realtime-bd825.appspot.com",
    messagingSenderId: "968642820456",
    appId: "1:968642820456:web:613752028881601836fedd",
    measurementId: "G-E56E4VREMD"
};
//  apiKey: "AIzaSyDX1roEz11r7IcFXQ1vhCuNIwHCbpBh1qQ",
//     authDomain: "chat-app-34c20.firebaseapp.com",
//     databaseURL: "https://chat-app-34c20-default-rtdb.firebaseio.com",
//     projectId: "chat-app-34c20",
//     storageBucket: "chat-app-34c20.appspot.com",
//     messagingSenderId: "842572540869",
//     appId: "1:842572540869:web:9872ec6842c4d369e2f9ac",
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue };