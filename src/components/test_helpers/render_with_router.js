import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router";
import { render } from '@testing-library/react';

const renderWithRouter = (component, initialRoute = '/') => (
    render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
)
export default renderWithRouter