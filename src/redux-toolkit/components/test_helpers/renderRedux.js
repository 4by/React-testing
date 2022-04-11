import { render } from "@testing-library/react";
import createReduxStore from "../../state/reducers";
import { Provider } from "react-redux";

export default (component, initialState) =>
    render(
        <Provider store={createReduxStore(initialState)}>
            {component}
        </Provider>
    )
