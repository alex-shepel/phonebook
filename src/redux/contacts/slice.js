import { createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, deleteItem, updateItem } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isAdding: false,
  isUpdating: false,
  isTokenExpired: false,
  deletingIds: [],
  filter: '',
};

const Error = {
  AUTH: 'Authentication token expired.',
  UNKNOWN: 'Unknown backend error occurred.',
};

const handleError = (state, error) => {
  if (error.statusText === 'Unauthorized') {
    state.isTokenExpired = true;
    return Error.AUTH;
  }

  return Error.UNKNOWN;
};

// We can mutate state below because of integrated IMMER lib only!

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setIsTokenExpired: (state, { payload }) => {
      state.isTokenExpired = payload;
    },
    resetContactsState: state => {
      Object.keys(initialState).forEach(
        key => (state[key] = initialState[key]),
      );
    },
  },
  extraReducers: {
    [fetchItems.pending]: state => {
      state.isLoading = true;
    },
    [fetchItems.fulfilled]: (state, { payload }) => {
      state.items = payload.sort((a, b) => a.name.localeCompare(b.name));
      state.isLoading = false;
    },
    [fetchItems.rejected]: (state, { payload }) => {
      handleError(state, payload);
      state.isLoading = false;
    },

    [addItem.pending]: state => {
      state.isAdding = true;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.items.sort((a, b) => a.name.localeCompare(b.name));
      state.isAdding = false;
    },
    [addItem.rejected]: (state, { payload }) => {
      state.isAdding = false;
    },

    [deleteItem.pending]: (state, { meta }) => {
      state.deletingIds.push(meta.arg);
    },
    [deleteItem.fulfilled]: (state, { meta }) => {
      state.items = state.items.filter(item => item.id !== meta.arg);
      state.deletingIds.filter(id => id !== meta.arg);
    },
    [deleteItem.rejected]: (state, { payload }) => {
      state.deletingIds.filter(id => id !== payload);
    },

    [updateItem.pending]: state => {
      state.isUpdating = true;
    },
    [updateItem.fulfilled]: (state, { payload }) => {
      const outdatedItem = state.items.find(item => item.id === payload.id);
      outdatedItem.name = payload.name;
      outdatedItem.number = payload.number;
      state.items.sort((a, b) => a.name.localeCompare(b.name));
      state.isUpdating = false;
    },
    [updateItem.rejected]: (state, { payload }) => {
      state.isUpdating = false;
    },
  },
});

export const { reducer: contactsReducer } = slice;
export const { setFilter, setIsTokenExpired, resetContactsState } =
  slice.actions;
