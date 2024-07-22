import { createUserWithEmailAndPassword, deleteUser as firebaseDeleteUser,
  updatePassword as firebaseUpdatePassword, onAuthStateChanged,
  sendEmailVerification, sendPasswordResetEmail,
  signInWithEmailAndPassword, } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

// @ts-ignore
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

type AuthProviderProp = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProp) {
  const [currentUser, setCurrentUser] = useState()

  async function signup(email: any, password: any) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);
        return userCredential;
      });
  }

  function login(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }
  
  function resetPassword(email: any) {
    return sendPasswordResetEmail(auth, email)
  }

  function updatePassword(password: any) {
    //@ts-ignore
    return firebaseUpdatePassword(currentUser, password)
  }

  function sendVerificationEmail() {
    if (currentUser) {
      return sendEmailVerification(currentUser);
    } else {
      return Promise.reject(new Error('No user is signed in'));
    }
  }

  function deleteUser(){
    if(currentUser){
      return firebaseDeleteUser(currentUser)
    }
    else {
      return Promise.reject(new Error('No user is signed in'))
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    })

    return unsubscribe
  }, [])
  
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updatePassword,
    sendVerificationEmail,
    deleteUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}