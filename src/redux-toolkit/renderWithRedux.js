import { render } from "@testing-library/react";
import createReduxStore from "./store";
import { Provider } from "react-redux";

export const renderWithRedux = (component, initialState) =>
    render(
        <Provider store={createReduxStore(initialState)}>
            {component}
        </Provider>
    )
