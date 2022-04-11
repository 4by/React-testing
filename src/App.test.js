import React from "react";
import axios from 'axios'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import Users from "./pages/UsersPage";
import renderWithRouter from './components/test_helpers/render_with_router'
import Navbar from './components/navbar'

jest.mock('axios')

const response = {
  data: [
    { "name": "first guy" },
    { "name": "second guy" },
    { "name": "third guy" },
  ]
}

describe('testing app', () => {

  test('redirect to main', async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link')
    userEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('redirect to about', async () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('about-link')
    userEvent.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('redirect to users', async () => {
    // memoryRouter переходит только по "локальным" ссылкам, поэтому мокаем
    axios.get.mockReturnValue(response);
    renderWithRouter(<Navbar />);
    const userLink = screen.getByTestId('users-link')
    userEvent.click(userLink)
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
    //очищаем моки
    jest.clearAllMocks();
  });

  test('Error page test', () => {
    // мы хотим зарендерить страницу ошибки, но на нее нет ссылки на экране
    //воспользуемся кастомной функцией
    //второй способ
    //renderWithRouter(null, '/users');
    renderWithRouter(null, '/sac')
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

})


describe('testing users', () => {

  beforeEach(() => {
    axios.get.mockReturnValue(response);
  })

  afterEach(() => {
    jest.clearAllMocks();
  })


  test('renders from backend', async () => {
    render(<MemoryRouter> <Users /> </MemoryRouter>);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });

  test('redirect to detail-user page', async () => {
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });

 
})