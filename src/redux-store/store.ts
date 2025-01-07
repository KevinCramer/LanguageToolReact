import authSlice from './auth'
import { configureStore } from '@reduxjs/toolkit';
import lockSlice from './lock';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lock: lockSlice,
  },
})