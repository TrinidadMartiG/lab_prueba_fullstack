import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSets = createAsyncThunk('sets/fetchSets', async () => {
  const response = await axios.get('http://localhost:5000/api/sets');
  return response.data;
});

const setsSlice = createSlice({
  name: 'sets',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default setsSlice.reducer; 