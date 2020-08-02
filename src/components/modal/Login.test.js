import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Login></Login>);

    expect(getByText('Logowanie')).toBeInTheDocument();
  });

  test('shows success notification after submit', () => {
    const { getByText } = render(<Login></Login>);
    const submitButton = getByText('Zaloguj');

    fireEvent.click(submitButton);
    expect(getByText('Zalogowano!')).toBeInTheDocument();
  });
});
