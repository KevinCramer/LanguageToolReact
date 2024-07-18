import authSlice from './auth'
import { configureStore } from '@reduxjs/toolkit';
import navbarSlice from './navbar'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    auth: authSlice,
  },
})