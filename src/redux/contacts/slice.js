import { createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, deleteItem, updateItem } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isAdding: false,
  isUpdating: false,
  deletingIds: [],
  filter: '',
};

// We can mutate state below because of integrated IMMER lib only!

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: state => {
      console.log('GET request sent');
      state.isLoading = true;
    },
    [fetchItems.fulfilled]: (state, { payload }) => {
      state.items = payload.sort((a, b) => a.name.localeCompare(b.name));
      state.isLoading = false;
    },
    [fetchItems.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
    },

    [addItem.pending]: state => {
      console.log('POST request sent');
      state.isAdding = true;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.items.sort((a, b) => a.name.localeCompare(b.name));
      state.isAdding = false;
    },
    [addItem.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isAdding = false;
    },

    [deleteItem.pending]: (state, { meta }) => {
      console.log('DELETE request sent');
      state.deletingIds.push(meta.arg);
    },
    [deleteItem.fulfilled]: (state, { meta }) => {
      state.items = state.items.filter(item => item.id !== meta.arg);
      state.deletingIds.filter(id => id !== meta.arg);
    },
    [deleteItem.rejected]: (state, { payload }) => {
      console.log(payload);
      state.deletingIds.filter(id => id !== payload);
    },

    [updateItem.pending]: state => {
      console.log('PATCH request sent');
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
      console.log(payload);
      state.isUpdating = false;
    },
  },
});

export const { reducer: contactsReducer } = slice;
export const { setFilter } = slice.actions;
