import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {

  test('sync render test', () => {
    render(<App />);

    // getBy возвращает один элемент/ошибку при отсутствии
    // getAll возвращает массив элементов
    // query(By, All) - возвращает элементы/null при отсутствии

    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole(/button/i);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    //показывает в консоли что рендерится
    // screen.debug()

    // expect(input).toMatchSnapshot();

  });

  test('async render test', async () => {
    render(<App />);

    // find(By, All) - возвращает элементы/ничего при отсутствии | обьект завернут в промис
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: 'red' });

  });


})