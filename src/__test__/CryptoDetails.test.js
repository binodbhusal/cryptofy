import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../__MockTest__/mockstore';
import CryptoDetail from '../__MockTest__/CryptoDetails';

describe('Render crypto detail component', () => {
  const cryptoData = {
    name: 'Binance',
  };

  test('renders crypto details', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CryptoDetail cryptoData={cryptoData} />
        </Provider>
      </MemoryRouter>,
    );

    const name = getByText(/Binance/);
    expect(name).toBeInTheDocument();
    expect(name).toMatchInlineSnapshot(`
      <p>
        Name:
         
        Binance
      </p>
    `);
  });
});
