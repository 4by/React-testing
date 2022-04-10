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
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

})


// describe('Users', () => {


//   let response;

//   beforeEach(() => {
//     response = {
//       data: [
//         { "name": "first guy" },
//         { "name": "second guy" },
//         { "name": "third guy" },
//       ]
//     }
//   })

//   afterEach(() => {
//     jest.clearAllMocks();
//   })


//   test('renders learn react link', async () => {
//     axios.get.mockReturnValue(response);
//     render(<Users />);
//     const users = await screen.findAllByTestId('user-item');
//     expect(users.length).toBe(3);
//     expect(axios.get).toBeCalledTimes(1);
//     screen.debug();
//   });

//   test('test redirect to details page', async () => {
//     axios.get.mockReturnValue(response);
//     render(renderWithRouter(<Users />));
//     const users = await screen.findAllByTestId('user-item');
//     expect(users.length).toBe(3);
//     userEvent.click(users[0])
//     expect(screen.getByTestId('user-page')).toBeInTheDocument();
//   });


// })