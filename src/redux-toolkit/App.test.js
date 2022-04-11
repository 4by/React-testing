import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import createReduxStore from "./store";
import { renderWithRedux } from "./test_helpers/renderWithRedux";
// import {renderTestApp} from "./test_helpers/renderTestApp";

describe('Counter test', () => {

    const initState = { counter: { value: 10 } }

    test('router', async () => {

        renderWithRedux(<App/>, initState)

        const incrementBtn = screen.getByTestId('increment-btn')
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    });
})