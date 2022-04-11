import { Provider } from "react-redux";
import createReduxStore from './store'
import App from './App';

export default () =>
    <Provider store={createReduxStore()}>
        <App />
    </Provider>
