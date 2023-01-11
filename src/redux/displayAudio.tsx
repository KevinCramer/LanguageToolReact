import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  audioBool : true
}

export const audioSlice = createSlice({
  name: 'displayAudio',
  initialState,
  reducers: {
    flipAudioBool: (state) => {
      state.audioBool = !state.audioBool
    },
  },
})
export const { flipAudioBool } = audioSlice.actions

export default audioSlice.reducer