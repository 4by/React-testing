import { screen, render } from "@testing-library/react";
import App from "./connect";
import userEvent from "@testing-library/user-event";
import renderWithRedux from "./test_helpers/render_with_redux";

describe('Counter test', () => {

    const initState = { counter: { value: 10 } }

    test('router', () => {
        renderWithRedux(<App/>, initState)
        // render(<App/>)
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        const incrementBtn = screen.getByTestId('increment-btn')
        userEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    
})