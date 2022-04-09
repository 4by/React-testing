import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  })

  return (
    <div>
      {data && <div style={{color: 'red'}}>data</div>}
      <h1>Hello world</h1>
      <button></button>
      <input placeholder="input value"></input>
    </div>
  );
}

export default App;
