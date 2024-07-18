import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login'
import navbarSlice from './navbar'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    login: loginSlice,
  },
})