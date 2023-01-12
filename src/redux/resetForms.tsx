import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  resetFormsBool : false
}

export const resetFormsSlice = createSlice({
  name: 'resetForms',
  initialState,
  reducers: {
    makeTrue: (state) => {
      state.resetFormsBool = true
    },
    makeFalse: (state) => {
      state.resetFormsBool = false
    },
  },
})
export const {makeTrue,makeFalse} = resetFormsSlice.actions

export default resetFormsSlice.reducer