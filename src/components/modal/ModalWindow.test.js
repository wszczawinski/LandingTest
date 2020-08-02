import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalWindow from './ModalWindow';
import Login from './Login';
import Register from './Register';

const mockFunctions = {
  historyGoBack: jest.fn(),
};

jest.mock('react-router', () => ({
  useHistory: () => ({
    goBack: mockFunctions.historyGoBack,
  }),
}));

describe('ModalWindow', () => {
  test('renders Login correctly', () => {
    const { getByText } = render(<ModalWindow Form={Login}></ModalWindow>);

    expect(getByText('Logowanie')).toBeInTheDocument();
  });

  test('renders Register correctly', () => {
    const { getByText } = render(<ModalWindow Form={Register}></ModalWindow>);

    expect(getByText('Rejestracja')).toBeInTheDocument();
  });

  test('closes modal window on X button click', async () => {
    const { findByText } = render(<ModalWindow Form={Login}></ModalWindow>);
    const closeButton = await findByText('x');
    fireEvent.click(closeButton);
    expect(mockFunctions.historyGoBack).toHaveBeenCalled();
  });
});
