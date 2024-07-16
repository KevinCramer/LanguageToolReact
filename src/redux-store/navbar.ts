import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openNavbar: false

}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state: any) => {
      state.openNavbar = !state.openNavbar
    }
  }
})

export const { toggleNavbar } = navbarSlice.actions
export default navbarSlice.reducer