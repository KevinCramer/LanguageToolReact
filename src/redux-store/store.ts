import { configureStore } from '@reduxjs/toolkit';
import navbarSlice from './navbar'
export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
})