import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    })

    return unsubscribe
  }, [])
  
  const value = {
    currentUser,
    signup,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}