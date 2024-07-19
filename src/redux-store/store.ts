import authSlice from './auth'
import { configureStore } from '@reduxjs/toolkit';
import lockSlice from './lock';
import navbarSlice from './navbar'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    auth: authSlice,
    lock: lockSlice,
  },
})