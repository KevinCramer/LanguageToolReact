import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizBool : false
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    flipQuizState: (state) => {
      state.quizBool = !state.quizBool
    },
  },
})
export const { flipQuizState } = quizSlice.actions

export default quizSlice.reducer