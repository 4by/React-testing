import { screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import renderRedux from "./components/test_helpers/renderRedux";

describe('Counter test', () => {

    const initState = { counter: { value: 10 } }

    test('router', async () => {
        renderRedux(<App/>, initState)
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        const incrementBtn = screen.getByTestId('increment-btn')
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    
})