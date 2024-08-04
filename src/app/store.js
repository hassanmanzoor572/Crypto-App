import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from '../services/CryptoAPI';

const store = configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoAPI.middleware),
});

export default store;
