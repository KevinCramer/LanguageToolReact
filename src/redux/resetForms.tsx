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
      console.log("Hello makeTrue")
    },
    makeFalse: (state) => {
      state.resetFormsBool = false
      console.log("Hello makeFalse")
    },
  },
})
export const {makeTrue,makeFalse} = resetFormsSlice.actions

export default resetFormsSlice.reducer