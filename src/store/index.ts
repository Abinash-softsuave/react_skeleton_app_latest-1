import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';

/**
 * Redux Store - UI/Client State Only
 * For server state (API data), use React Query
 */
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // Add more UI-related reducers here (auth, modals, etc.)
  },
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
