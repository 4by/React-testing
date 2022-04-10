import {MemoryRouter} from "react-router-dom";
import AppRouter from "../router";

const renderWithRouter = (component, initialRoute = '/') =>  (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
export default renderWithRouter