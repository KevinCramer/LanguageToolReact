import { configureStore } from "@reduxjs/toolkit";
import baseLanguage from "./baseLanguage";
import audioReducer from './displayAudio'
import baseLanguageReducer from './baseLanguage'
import quizReducer from './quiz'


export const store = configureStore({
    reducer: {
        audio: audioReducer,
        baseLanguage: baseLanguageReducer,
        quiz: quizReducer

    }
});