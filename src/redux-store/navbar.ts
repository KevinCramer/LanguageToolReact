import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavbarOpen: false

}
export interface NavbarState {
  isNavbarOpen: boolean;
}

export interface RootState {
  navbar: NavbarState;
}
export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state: NavbarState) => {
      state.isNavbarOpen = !state.isNavbarOpen
    },
    closeNavbar: (state: NavbarState) => {
      state.isNavbarOpen = false
    }
  }
})

export const { toggleNavbar, closeNavbar } = navbarSlice.actions
export default navbarSlice.reducer