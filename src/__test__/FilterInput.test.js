import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FilterInput from '../Component/FilterInput';

describe('FilterInput component', () => {
  test('renders with the correct props', () => {
    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <FilterInput onChange={onChange} />
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('Search Crypto Exchange');

    expect(inputElement).toBeInTheDocument();
  });
});
