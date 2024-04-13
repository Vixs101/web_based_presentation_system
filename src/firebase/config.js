import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "web-based-presentation-system.firebaseapp.com",
  projectId: "web-based-presentation-system",
  storageBucket: "web-based-presentation-system.appspot.com",
  messagingSenderId: "1033338232759",
  appId: "1:1033338232759:web:381556edf5736ac4111232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)

export { auth, storage }