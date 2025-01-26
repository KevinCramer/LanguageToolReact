import { configureStore } from '@reduxjs/toolkit';
import routeSlice from './route';

export const store = configureStore({
  reducer: {
    route: routeSlice,
  },
})