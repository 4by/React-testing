import React from 'react';
import Router from './components/router'
import Navbar from './components/navbar'
const App = () => (

  <div>
    {/* отображенные на экране ссылки с указанным маршрутом */}
    <Navbar />
    {/* назначение маршрута для каждой ссылки  */}
    <Router />
  </div>

)


export default App;
