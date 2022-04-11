import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterReducer";

const App = () => {

  const getCounterValue = state => state?.counter?.value || 0
  
  const onIncrement = () => dispatch(increment())
  const onDecrement = () => dispatch(decrement())
  
  const value = useSelector(getCounterValue)
  const dispatch = useDispatch()
  

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={onIncrement}>increment</button>
      <button data-testid="decrement-btn" onClick={onDecrement}>decrement</button>
    </div>
  );
}


export default App;
