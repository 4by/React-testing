import counterReducer from "./CounterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export default (initialState = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })


