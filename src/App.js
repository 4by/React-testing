import React from 'react';
import { Link } from 'react-router-dom';
import Router from './components/router'
import Navbar from './components/navbar'
const App = () => {
  return (

    <div>
      <Navbar />
      <Router />
    </div>

  )
}

export default App;
