import { configureStore } from '@reduxjs/toolkit';
import setsReducer from './setsSlice';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    sets: setsReducer,
    cards: cardsReducer,
  },
}); 