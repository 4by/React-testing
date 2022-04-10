import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Router from './router'
const App = () => {
  return (

    <div>
      <Link to='/' data-testid="main-link">main</Link>
      <Link to='/about' data-testid="about-link">about</Link>
      <Link to='/users' data-testid="users-link">users</Link>
     
      <Router/>
    </div>

  )
}

export default App;
