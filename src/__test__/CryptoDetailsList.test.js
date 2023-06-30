import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../__MockTest__/mockstore';
import CryptoDetailList from '../Component/CryptoDetailsList';

describe('CryptoDetailList component', () => {
  test('renders the selected crypto detail', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/crypto-details/binance']}>
          <CryptoDetailList />
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
