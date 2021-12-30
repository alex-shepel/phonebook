import * as api from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Error = {
  UNKNOWN: 'Unknown backend error occurred.',
};

const fetchItems = createAsyncThunk(
  'contacts/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getContacts();
    } catch (error) {
      console.log('error.response ->', error.response);
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const addItem = createAsyncThunk(
  'contacts/addItem',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      return await api.addContact({ name, number });
    } catch (error) {
      console.log('error.response ->', error.response);
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const deleteItem = createAsyncThunk(
  'contacts/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      return await api.deleteContact(id);
    } catch (error) {
      console.log('error.response ->', error.response);
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const updateItem = createAsyncThunk(
  'contacts/updateItem',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      return await api.updateContact(id, { name, number });
    } catch (error) {
      console.log('error.response ->', error.response);
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

export { fetchItems, addItem, deleteItem, updateItem };
