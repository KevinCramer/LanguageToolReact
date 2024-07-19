import { createUserWithEmailAndPassword, updateEmail as firebaseUpdateEmail, 
  updatePassword as firebaseUpdatePassword, onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword } from 'firebase/auth';
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

  function logout() {
    return auth.signOut()
  }
  
  function resetPassword(email: any) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateEmail(newEmail: any) {
    console.log('updateEmail is called from AuthContext.ts')
    console.log('newEmail: ', newEmail)
    //@ts-ignore
    return firebaseUpdateEmail(currentUser, newEmail)
  }

  function updatePassword(password: any) {
    //@ts-ignore
    return firebaseUpdatePassword(currentUser, password)
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
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}