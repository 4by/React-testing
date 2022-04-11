import counterReducer from "./CounterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

const createReduxStore = (initialState = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })


export default createReduxStore