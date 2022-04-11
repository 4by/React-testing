import { Provider } from "react-redux";
import createReduxStore from './state/reducers'
import App from './App';

export default () =>
    <Provider store={createReduxStore()}>
        <App />
    </Provider>
