import { createSlice } from '@reduxjs/toolkit';

export const loginModalStates = {
  none: 'none',
  login: 'login',
  signup: 'signup',
  forgotPassword: 'forgotPassword'
}
const initialState = {
  modalToShow: loginModalStates.none

}
export interface LoginState {
  modalToShow: string;
}

export interface RootState {
  login: LoginState;
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    displayLogin: (state: LoginState) => {
      state.modalToShow = loginModalStates.login
    },
    displaySignup: (state: LoginState) => {
      state.modalToShow = loginModalStates.signup
    },
    displayForgotPassword: (state: LoginState) => {
      state.modalToShow = loginModalStates.forgotPassword
    },
    hideModal: (state: LoginState) => {
      state.modalToShow = loginModalStates.none
    }
  }
})

export const { displayLogin, displaySignup, hideModal, displayForgotPassword } = loginSlice.actions
export default loginSlice.reducer