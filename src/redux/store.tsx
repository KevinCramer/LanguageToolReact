import { configureStore } from "@reduxjs/toolkit";
import audioReducer from './displayAudio'
export const store = configureStore({
    reducer: {
        audio: audioReducer
    }
});