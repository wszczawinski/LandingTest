import React from 'react';
import { render } from '@testing-library/react';
import Description from './Description';

describe('Hero', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Description></Description>);

    expect(getByText('Jak to działa?')).toBeInTheDocument();
  });
});
