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
    },
  },
})
export const { flipTrueOrderState } = trueOrderSlice.actions

export default trueOrderSlice.reducer