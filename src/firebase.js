import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBYtQ95t8j_E6n2crqloNnRJ3twTn0N2MY",
  authDomain: "netfilx-clone-f7575.firebaseapp.com",
  projectId: "netfilx-clone-f7575",
  storageBucket: "netfilx-clone-f7575.firebasestorage.app",
  messagingSenderId: "7258480534",
  appId: "1:7258480534:web:0faec2e4d61b7e156807b7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "))
   
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
};

export { auth, db, login, signup, logout };
