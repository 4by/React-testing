import { useEffect, useState } from 'react';

const App = () => {

  const [timeState, setTimeState] = useState(null)
  const [btnState, setBtnState] = useState(false)
  const [inputState, setInputState] = useState("")

  //при первой загрузке страницы через 100ms в стейт data назначается значение 
  useEffect(() => { setTimeout(() => setTimeState({}), 100) })

  return (
    <div>

      <h1>Hello world</h1>

      {/* такой синтаксис означает что блок появится только при выполнении условия
      в данном случае наличия стейта data */}
      {timeState && <div style={{ color: 'red' }}>data</div>}

      {/* по пропсу data-testid тесты ищут элементы матчером "(get/query/find)ByTestId" */}
      <h1 data-testid="input-render-elem">{inputState}</h1>
      <input onChange={e => setInputState(e.target.value)} placeholder="input value"></input>

      {btnState === true && <div data-testid="btn-render-elem">toggle</div>}
      <button data-testid="btn-elem" onClick={() => setBtnState(prev => !prev)}></button>


    </div>
  );
}

export default App;
