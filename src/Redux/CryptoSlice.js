import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'https://api.coincap.io/v2/exchanges/';
export const fetchCryptoData = createAsyncThunk('cryptos/fetchCrypto', async () => {
  try {
    const response = await axios.get(baseAPI);
    const { data, timestamp } = response.data;
    const exchanges = Object.keys(data).map((exchangeId) => ({
      exchangeId,
      ...data[exchangeId],
    }));
    return {
      exchanges, timestamp,
    };
  } catch (error) {
    throw new Error('something went wrong');
  }
});
const initialState = {
  cryptos: [],
  isLoading: false,
  isError: null,
};
const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.cryptos = action.payload.exchanges;
        state.isLoading = false;
        state.isError = null;
      });
  },

});
export default CryptoSlice.reducer;
