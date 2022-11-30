import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { json } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [fetchagain, setFetchAgain] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem("user", JSON.stringify(currentUser));
      setUser(currentUser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user, fetchagain, setFetchAgain }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
