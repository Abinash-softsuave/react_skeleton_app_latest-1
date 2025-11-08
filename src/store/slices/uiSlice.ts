import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME } from '@utils/constants';

/**
 * UI Slice - Client-side UI state only
 * For server state (API data), use React Query hooks
 */

type Theme = typeof THEME.LIGHT | typeof THEME.DARK;

interface UIState {
  theme: Theme;
  sidebarOpen: boolean;
  modalOpen: boolean;
}

const initialState: UIState = {
  theme: THEME.LIGHT,
  sidebarOpen: false,
  modalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
  },
});

export const { setTheme, toggleTheme, toggleSidebar, setModalOpen } =
  uiSlice.actions;
export default uiSlice.reducer;
