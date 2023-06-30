import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CryptoItem from '../__MockTest__/CryptoItem';
import store from '../__MockTest__/mockstore';

describe('Crypto Item component', () => {
  test('renders crypto item and handle expand details button', () => {
    const cryptoData = {
      name: 'Binance',
    };
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CryptoItem cryptoData={cryptoData} />
        </Provider>
      </MemoryRouter>,
    );
    const exchangeName = getByText('Binance');
    expect(exchangeName).toBeInTheDocument();
    expect(exchangeName).toMatchSnapshot();
  });
});
