import { useEffect, useState } from 'react';

const App = () => {

    const [timeState, setTimeState] = useState(null)

    //при первой загрузке страницы через 100ms в стейт data назначается значение 
    useEffect(() => { setTimeout(() => setTimeState({}), 100) })

    return (
        <div>
            {/* такой синтаксис означает что блок появится только при выполнении условия
      в данном случае наличия стейта data */}
            {timeState && <div style={{ color: 'red' }}>data</div>}
        </div>
    );
}

export default App;
