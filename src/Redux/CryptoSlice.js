import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cryptos: [],
  isLoading: false,
  isError: null,
};
const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    displayCrypto: (state, action) => {
      const cryptomsg = action.payload;
      state.cryptos = 'Returning value';
      return cryptomsg;
    },
  },

});
export const displayCrypto = CryptoSlice.actions;
export default CryptoSlice.reducer;
