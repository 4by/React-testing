import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from "react-router-dom";


describe('TEST APP', () => {
  test('Router test', () => {
    //мы не можем заредерить Апп отдельно от роутера, поскольку Апп использует
    //роутовские элементы (а сам роутер в индексе), поэтому
    //используем специальный роутер для тестирования
    render(<MemoryRouter> <App /> </MemoryRouter>);
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    userEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    userEvent.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('Error page test', () => {
      render(
        //передаем пропс для роутера, и тогда выполяется переход по данным ссылкам поледовательно
          <MemoryRouter initialEntries={['/about', '/sac']}>
              <App/>
          </MemoryRouter>
      );
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });



})