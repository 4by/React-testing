import React from 'react';
import { connect } from 'react-redux'
import { cashPropsBinder, cashFunsBinder } from '../state/stateBinder'

const App = ({ cash, decr, incr }) => {
  
  return (
    <div>
      <h1 data-testid="value-title">{cash}</h1>
      <button data-testid="increment-btn" onClick={incr}>increment</button>
      <button data-testid="decrement-btn" onClick={decr}>decrement</button>
    </div>
  );
}


export default connect(cashPropsBinder, cashFunsBinder)(App)
