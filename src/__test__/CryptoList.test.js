import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Cryptolist from '../__MockTest__/CryptoList';
import store from '../__MockTest__/mockstore';

describe('CryptoList component render', () => {
  test('Test render of Cryptolist component', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Cryptolist />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
