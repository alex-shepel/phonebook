import * as api from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchItems = createAsyncThunk(
  'contacts/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addItem = createAsyncThunk(
  'contacts/addItem',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      return await api.addContact({ name, number });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteItem = createAsyncThunk(
  'contacts/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      return await api.deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const updateItem = createAsyncThunk(
  'contacts/updateItem',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      return await api.updateContact(id, { name, number });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { fetchItems, addItem, deleteItem, updateItem };
