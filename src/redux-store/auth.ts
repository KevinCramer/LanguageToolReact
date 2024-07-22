import { createSlice } from '@reduxjs/toolkit';

export const authModalStates = {
  none: 'none',
  login: 'login',
  signup: 'signup',
  forgotPassword: 'forgotPassword',
  updateProfile: 'updateProfile',
  deleteAccount: 'deleteAccount'
}
const initialState = {
  modalToShow: authModalStates.none

}
export interface AuthState {
  modalToShow: string;
}

export interface RootStateAuth {
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
    },
    displayDeleteAccount: (state: AuthState) => {
      state.modalToShow = authModalStates.deleteAccount
    },
    hideModal: (state: AuthState) => {
      state.modalToShow = authModalStates.none
    }
  }
})

export const { displayLogin, displaySignup, hideModal, 
  displayForgotPassword, displayUpdateProfile, displayDeleteAccount } = authSlice.actions
export default authSlice.reducer