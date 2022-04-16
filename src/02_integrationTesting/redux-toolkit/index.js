import { Provider } from "react-redux";
import createReduxStore from './state/reducers'
// import App from './components/hooks';
import App from './components/connect';

export default () =>
    <Provider store={createReduxStore()}>
        <App />
    </Provider>
