import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openNavbar: false

}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    toggleNavbar: (state: any) => {
      state.openNavbar = !state.openNavbar
    }
  }
})

export const { toggleNavbar } = pizzaSlice.actions
export default pizzaSlice.reducer