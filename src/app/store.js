import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import { saveState, loadState } from './localStorageUtils';

// Load initial state from localStorage
const preloadedState = {
  allCart: loadState(), // Load persisted cart state
};

// Create store
export const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
  preloadedState, // Use preloaded state from localStorage
});

// Subscribe to store changes to save state to localStorage
store.subscribe(() => {
  saveState(store.getState().allCart); // Save only the cart slice
});

export default store;
