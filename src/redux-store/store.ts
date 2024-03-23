import { configureStore } from '@reduxjs/toolkit';
import featureToggleReducer from './featureToggleSlice';

export const store = configureStore({
  reducer: {
    featureToggle: featureToggleReducer,
  },
});