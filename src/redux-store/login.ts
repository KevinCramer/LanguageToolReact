import { createSlice } from '@reduxjs/toolkit';

export const loginModalStates = {
  none: 'none',
  login: 'login',
  signup: 'signup',
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
    hideModal: (state: LoginState) => {
      state.modalToShow = loginModalStates.none
    }
  }
})

export const { displayLogin, displaySignup, hideModal } = loginSlice.actions
export default loginSlice.reducer