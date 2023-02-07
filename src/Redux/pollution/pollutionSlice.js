import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const Endpoint = 'https://restcountries.com/v2/all';

export const fetchApi = createAsyncThunk('country/fetch', async () => {
  const response = await axios.get(Endpoint);
  if (response.data) {
    return response.data;
  }
  return [];
});

const pollutionSlice = createSlice({
  name: 'map',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled,
      (state, { payload }) => ({ ...state, countryList: [...payload] }));
  },
});

export default pollutionSlice.reducer;
