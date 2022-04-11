import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import createReduxStore from './store'
import App from './App';


export default () =>
    <Provider store={createReduxStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
