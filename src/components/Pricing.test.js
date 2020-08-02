import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Pricing from './Pricing';

describe('Pricing', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>
    );

    expect(getByText('Za darmo')).toBeInTheDocument();
  });
});
