import { render, screen } from '@testing-library/react';
import App from '.';



test('async render test', async () => {
    render(<App />);
    //показывает в консоли что рендерится
    //в консоли видим, что элементы, загружающиеся асинхронно появляются не сразу
    screen.debug()

    // find(By, All) - возвращает элементы/ничего при отсутствии | обьект завернут в промис
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: 'red' });

    //теперь асинхроннные элементы появились
    screen.debug()

});
