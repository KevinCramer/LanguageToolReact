import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  audioBool : false
}

export const audioSlice = createSlice({
  name: 'displayAudio',
  initialState,
  reducers: {
    flip: (state) => {
      state.audioBool = !state.audioBool
    },
  },
})
export const { flip } = audioSlice.actions

export default audioSlice.reducer