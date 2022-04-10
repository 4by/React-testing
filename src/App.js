import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState("")

  //при первой загрузке страницы через 100ms в стейт data назначается значение 
  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  })

  return (
    <div>

      <h1>Hello world</h1>
     
      {/* такой синтаксис означает что блок появится только при выполнении условия
      в данном случае наличия стейта data */}
      {data && <div style={{ color: 'red' }}>data</div>}
     
      <input onChange = {e => setValue(e.target.value)}  placeholder="input value"></input>
      <h1 data-testid="value-elem">{value}</h1>

      <button data-testid="toggle-btn" onClick={() => setToggle(prev => !prev)}></button>
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      



    </div>
  );
}

export default App;
