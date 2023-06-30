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

// describe('RocketItem Component', () => {
//   const mockStore = configureStore();
//   const initialState = {
//   };
//   const store = mockStore(initialState);

//   test('renders rocket item and handles reserve/cancel reserve', () => {
//     const rocketData = {
//       id: '1',
//       rocket_name: 'Falcon 9',
//       description: 'Sample rocket description',
//       flickr_images: ['image1.jpg'],
//       reserved: true,
//     };

//     const { getByText } = render(
//       <MemoryRouter>
//         <Provider store={store}>
//           <RocketItem rocketData={rocketData} />
//         </Provider>
//       </MemoryRouter>,
//     );

//     const rocketName = getByText('Falcon 9');
//     expect(rocketName).toBeInTheDocument();

//     const rocketDescription = getByText('Sample rocket description');
//     expect(rocketDescription).toBeInTheDocument();
// eslint-disable-next-line max-len
//     const cancelReserveButton = getByText((content, element) => element.tagName.toLowerCase() === 'button' && content === 'Cancel Reserve');
//     expect(cancelReserveButton).toBeInTheDocument();
//     fireEvent.click(cancelReserveButton);
//   });
// });
