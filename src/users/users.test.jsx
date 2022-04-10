import { render, screen, fireEvent } from '@testing-library/react';
import Users from './users';
import axios from 'axios'
import React from "react";


jest.mock('axios')

describe('TEST APP', () => {


    let response;

    beforeEach(() => {
        response = {
            data: [
                { "id": 1, "name": "Leanne Graham" },
                { "id": 2, "name": "Ervin Howell" },
                { "id": 3, "name": "Clementine Bauch" },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks();
    })


    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        // const users = await screen.findAllByTestId('user-item');
        // expect(users.length).toBe(3);
        // expect(axios.get).toBeCalledTimes(1);
        // screen.debug();
    });




})