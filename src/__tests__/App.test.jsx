import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App.js';
import { Provider } from 'react-redux';
import store from '../store.js';

describe('Add and Delete a task', () => {
    it('Adds a task successfully ', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>);

    const inputField = screen.getByPlaceholderText('Enter task');
    const addButton = screen.getByTestId('btn');

    const taskText = 'Test task';
    fireEvent.change(inputField, { target: { value: taskText } });
    fireEvent.click(addButton);

    const addedTask = screen.getByText(taskText);
    expect(addedTask).toBeInTheDocument();
    });

    it('Deletes a task successfully ', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>);
    
        const inputField = screen.getByPlaceholderText('Enter task');
        const addButton = screen.getByTestId('btn');
    
        const taskText = 'Test task';
        fireEvent.change(inputField, { target: { value: taskText } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByTestId('delete-btn');
        fireEvent.click(deleteButton);
    
        const addedTask = screen.queryByText(taskText);
        expect(addedTask).toBeNull();
        });
});