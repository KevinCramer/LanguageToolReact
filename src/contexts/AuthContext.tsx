import { createUserWithEmailAndPassword, onAuthStateChanged, 
  sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
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

  function signup(email: any, password: any) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email: any) {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    })

    return unsubscribe
  }, [])
  
  const value = {
    currentUser,
    login,
    signup,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}