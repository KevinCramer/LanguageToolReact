import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  baseLanguageBool : true
}

export const baseLanguageSlice = createSlice({
  name: 'displayAudio',
  initialState,
  reducers: {
    flipBaseLanguage: (state) => {
      state.baseLanguageBool = !state.baseLanguageBool
    },
  },
})
export const { flipBaseLanguage } = baseLanguageSlice.actions

export default baseLanguageSlice.reducer