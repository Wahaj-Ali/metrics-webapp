import { configureStore } from '@reduxjs/toolkit';
import pollutionSlice from './pollution/pollutionSlice';

const store = configureStore({
  reducer: {
    pollutionSlice,
  },
});

export default store;
