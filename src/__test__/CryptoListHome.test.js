import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../__MockTest__/mockstore';
import CryptoListHome from '../__MockTest__/CryptoListHome';

describe('Component', () => {
  test('Renders CryptoDetailList component', () => {
    const { container } = render(
      <Provider store={store}>
        <CryptoListHome />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
