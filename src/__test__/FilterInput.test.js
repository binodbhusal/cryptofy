import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FilterInput from '../Component/FilterInput';

describe('FilterInput component', () => {
  test('renders with the correct props', () => {
    const value = 'example';
    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <FilterInput value={value} onChange={onChange} />
      </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('Search by Name');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(value);
  });
});
