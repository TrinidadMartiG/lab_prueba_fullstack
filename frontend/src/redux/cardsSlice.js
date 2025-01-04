import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSetCards = createAsyncThunk(
  'cards/fetchSetCards',
  async (setId) => {
    const response = await axios.get(`http://localhost:5000/api/sets/${setId}/cards`);
    return response.data;
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],
    filteredItems: [],
    searchTerm: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      if (action.payload) {
        state.filteredItems = state.items.filter(card => 
          card.name.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      } else {
        state.filteredItems = state.items;
      }
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.filteredItems = state.items;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSetCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSetCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchSetCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, clearSearch } = cardsSlice.actions;
export default cardsSlice.reducer; 