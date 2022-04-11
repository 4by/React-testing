import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router";
import { render } from '@testing-library/react';

const renderWithRouter = (component, initialRoute = '/') =>
    render(
        //мемори роутер последовательно проходит по всем путям из initialEntries 
        //или по компонентам, которые под роутером
        //для того, чтобы он знал куда они ведут - в ф-ю добавлен AppRouter
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )

export default renderWithRouter