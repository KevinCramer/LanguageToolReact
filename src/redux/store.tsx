import { configureStore } from "@reduxjs/toolkit";
import baseLanguage from "./baseLanguage";
import audioReducer from './displayAudio'
import baseLanguageReducer from './baseLanguage'
import quizReducer from './quiz'
import trueOrderReducer from './trueOrder'
import resetFormsReducer from './resetForms'




export const store = configureStore({
    reducer: {
        audio: audioReducer,
        baseLanguage: baseLanguageReducer,
        quiz: quizReducer,
        trueOrder: trueOrderReducer,
        resetForms: resetFormsReducer



    }
});