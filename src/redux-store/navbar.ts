import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavbarOpen: false

}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state: any) => {
      state.openNavbar = !state.isNavbarOpen
    },
    closeNavbar: (state: any) => {
      state.isNavbarOpen = false
    }
  }
})

export const { toggleNavbar, closeNavbar } = navbarSlice.actions
export default navbarSlice.reducer