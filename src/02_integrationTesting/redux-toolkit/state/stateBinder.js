// import { addCashAction, getCashAction } from "./cashActions";
import { decrement, increment } from "./reducers/CounterReducer";
import getCounterValue from './state selector/stateSelector'


export const cashPropsBinder = (state) => ({
    cash: getCounterValue(state)
})

export const cashFunsBinder = dispatch => ({
    decr: () => dispatch(decrement()),
    incr: () => dispatch(increment()),
})
