// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Firebase Authentication
import { getFirestore } from 'firebase/firestore'; // Firestore (optional)

// Firebase configuration (use environment variables to store sensitive keys)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Check if all required environment variables are available
Object.values(firebaseConfig).forEach((value) => {
  if (!value) {
    console.error('Missing Firebase config environment variables');
    throw new Error('Firebase configuration is incomplete');
  }
});

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app); // Modular v9+ approach for Firebase Authentication
const db = getFirestore(app); // Firestore instance

// Export Firebase services for use in other files
export { app, auth, db, firebaseConfig }; // Explicitly export firebaseConfig for debugging or future use





