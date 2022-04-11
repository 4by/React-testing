import { screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "./renderWithRedux";

describe('Counter test', () => {

    const initState = { counter: { value: 10 } }

    test('router', async () => {
        renderWithRedux(<App/>, initState)
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        const incrementBtn = screen.getByTestId('increment-btn')
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    
})