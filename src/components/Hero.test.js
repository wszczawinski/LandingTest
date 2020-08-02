import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Hero></Hero>);

    expect(getByText('Poznaj Lorem Ipsum!')).toBeInTheDocument();
  });
});
