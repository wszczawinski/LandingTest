import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Register from './Register';

describe('Login', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Register></Register>);

    expect(getByText('Rejestracja')).toBeInTheDocument();
  });

  test('shows success notification after submit', () => {
    const { getByText } = render(<Register></Register>);
    const submitButton = getByText('Zarejestruj');

    fireEvent.click(submitButton);
    expect(getByText('Wysłano!')).toBeInTheDocument();
  });
});
