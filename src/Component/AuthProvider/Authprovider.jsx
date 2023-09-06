"use client"
import { createContext, useEffect, useState } from "react";

import {
     FacebookAuthProvider,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     sendEmailVerification,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile,
} from 'firebase/auth'
import app from "@/FirebaseAuth/Firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);
     const FacebookProvider = new FacebookAuthProvider();
     const GoogleProvider = new GoogleAuthProvider();
     const createUser = async (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const updateUserProfile = async (name, photo) => {
          return updateProfile(auth?.currentUser, {
               displayName: name,
               photoURL: photo,
          })
     }



     const FacebookLogin = () => {
          return signInWithPopup(auth, FacebookProvider)
     }
     const GoogleLogin = async () => {
          return signInWithPopup(auth, GoogleProvider)
     }

     const verifyUser = () => {
          return sendEmailVerification(auth.currentUser)

     }

     const Login = async (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     const LogOut = async () => {
          return signOut(auth)
     }
     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
          })
          return () => {
               unsubcript()
          }
     }, []);


     const authInfo = {
          createUser,
          updateUserProfile,
          GoogleLogin, FacebookLogin,
          verifyUser,
         Login,
          loading,
          user,
          LogOut
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;