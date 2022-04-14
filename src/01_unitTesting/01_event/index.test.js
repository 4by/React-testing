import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '.';

describe('TEST APP', () => {

  // beforeEach(() => render(<App />))
  // afterEach(() => { cleanup() });

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

    // expect(input).toMatchSnapshot();

  });


  test('click event', () => {
    const btnId = 'btn-elem'
    const elemId = 'btn-render-elem'

    render(<App />);
    const btn = screen.getByTestId(btnId)
    expect(screen.queryByTestId(elemId)).toBeNull()
    // fireEvent искуственно создает событие
    fireEvent.click(btn)
    expect(screen.queryByTestId(elemId)).toBeInTheDocument()
  });

  test('input event', () => {
    const inputId = 'input-render-elem'
    const arg = "123"

    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    //toContainHTML не совсем то, что нужно. Оно показывает не содержимое инпута а весь обьект хтмл
    expect(screen.queryByTestId(inputId)).toContainHTML("")
    fireEvent.input(input, { target: { value: arg } })
    //userEvent в отличие от fireEvent не просто модулирует js-события, а
    //вообще события, близкие к пользователю
    userEvent.type(input, arg)
    expect(screen.queryByTestId(inputId)).toContainHTML(arg)

  });


})

