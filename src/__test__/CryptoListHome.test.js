import React from 'react';
import { render } from '@testing-library/react';

import CryptoListHome from '../__MockTest__/CryptoListHome';

describe('Component', () => {
  test('Renders CryptoDetailList component', () => {
    const { container } = render(
      <CryptoListHome />,
    );
    expect(container).toMatchSnapshot();
  });
});
