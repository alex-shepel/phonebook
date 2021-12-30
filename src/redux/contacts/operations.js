import * as api from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getItems } from './selectors';

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
      console.log('error.response ->', error.response);
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
      console.log('error.response ->', error.response);
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
      console.log('error.response ->', error.response);
      return rejectWithValue(error);
    }
  },
);

export { fetchItems, addItem, deleteItem, updateItem };
