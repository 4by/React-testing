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
                { "name": "first guy" },
                { "name": "second guy" },
                { "name": "third guy" },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks();
    })


    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();

    });




})