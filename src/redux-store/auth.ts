import { createSlice } from '@reduxjs/toolkit';

export const authModalStates = {
  none: 'none',
  login: 'login',
  signup: 'signup',
  forgotPassword: 'forgotPassword',
  updateProfile: 'updateProfile',
}
const initialState = {
  modalToShow: authModalStates.none

}
export interface AuthState {
  modalToShow: string;
}

export interface RootState {
  auth: AuthState;
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    displayLogin: (state: AuthState) => {
      state.modalToShow = authModalStates.login
    },
    displaySignup: (state: AuthState) => {
      state.modalToShow = authModalStates.signup
    },
    displayForgotPassword: (state: AuthState) => {
      state.modalToShow = authModalStates.forgotPassword
    },
    displayUpdateProfile: (state: AuthState) => {
      state.modalToShow = authModalStates.updateProfile
    }, hideModal: (state: AuthState) => {
      state.modalToShow = authModalStates.none
    }
  }
})

export const { displayLogin, displaySignup, hideModal, 
  displayForgotPassword, displayUpdateProfile } = authSlice.actions
export default authSlice.reducer