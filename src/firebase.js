import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyApjQ0lelIbsp8kB_TXPGOk2wYGV60k1yY",
    authDomain: "meet-and-innovate-9a63b.firebaseapp.com",
    projectId: "meet-and-innovate-9a63b",
    storageBucket: "meet-and-innovate-9a63b.appspot.com",
    messagingSenderId: "401043045043",
    appId: "1:401043045043:web:1e556f9c89a85e96054ec6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);