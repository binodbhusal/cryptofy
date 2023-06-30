// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import { fetchCryptoData } from '../__MockTest__/CryptoSlice';

// const mock = new MockAdapter(axios);
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// describe('CryptoSlice tester', () => {
//   it('it should fetch crypto and update state', async () => {
//     const mockResponse = {
//       exchanges: [
//         {
//           exchangeId: 'binance',
//           name: 'Binance',
//           rank: '1',
//         },
//         {
//           exchangeId: 'gdax',
//           name: 'Coinbase Pro',
//           rank: '2',
//         },
//       ],
//       timestamp: Date.now(),
//     };
//     mock.onGet('https://api.coincap.io/v2/exchanges/').reply(200, mockResponse);
//     const initialState = {
//       cryptos: [],
//       isLoading: false,
//       isError: null,
//     };
//     const store = mockStore({ crypto: initialState });
//     await store.dispatch(fetchCryptoData());
//     const actions = store.getActions();
//     expect(actions[0].type).toEqual(fetchCryptoData.pending.type);
//     expect(actions[1].type).toEqual(fetchCryptoData.fulfilled.type);
//     expect(actions[1].payload).toEqual(mockResponse);
//   });
// });
