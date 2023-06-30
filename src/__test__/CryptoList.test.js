import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Cryptolist from '../Component/CryptoList';
import store from '../Redux/store';

describe('CryptoList component render', () => {
  test('Test render of Cryptolist component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Cryptolist />
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
