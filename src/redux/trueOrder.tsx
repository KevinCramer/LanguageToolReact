import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trueOrderBool : true
}

export const trueOrderSlice = createSlice({
  name: 'trueOrder',
  initialState,
  reducers: {
    flipTrueOrderState: (state) => {
      state.trueOrderBool = !state.trueOrderBool.valueOf;
      console.log("321453145")
    },
  },
})
export const { flipTrueOrderState } = trueOrderSlice.actions

export default trueOrderSlice.reducer