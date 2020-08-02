import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('Logo')).toBeInTheDocument();
  });
});
