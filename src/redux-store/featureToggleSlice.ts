import { createSlice } from '@reduxjs/toolkit';

export const featureToggleSlice = createSlice({
  name: 'featureToggle',
  initialState: {
    x: false, // Initial state of x
  },
  reducers: {
    toggleX: state => {
      state.x = !state.x;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleX } = featureToggleSlice.actions;

export default featureToggleSlice.reducer;