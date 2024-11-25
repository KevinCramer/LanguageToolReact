import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHome: true

}
export interface NavbarState {
  isHome: boolean;
}

export interface RootStateNavbar {
  navbar: NavbarState;
}
export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    backHome: (state: NavbarState) => {
      state.isHome = true
    },
    startNow: (state: NavbarState) => {
      state.isHome = false
    }
  }
})

export const { backHome, startNow } = navbarSlice.actions
export default navbarSlice.reducer