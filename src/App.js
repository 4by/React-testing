import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState("")

  const onClick = () => setToggle(prev => !prev)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  })

  return (
    <div>
      {/* такой синтаксис означает что блоки появятся только при выполнении условия */}
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: 'red' }}>data</div>}

      <h1 data-testid="value-elem">{value}</h1>

      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}></button>
      <input onChange = {e => setValue(e.target.value)}  placeholder="input value"></input>
    </div>
  );
}

export default App;
