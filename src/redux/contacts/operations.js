import * as api from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchItems = createAsyncThunk(
  'contacts/fetchItems',
  async (_, { rejectWithValue }) => {
    // try {
    //   const { data } = await api.getContacts();
    //   return data;
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
  },
);

const addItem = createAsyncThunk(
  'contacts/addItem',
  async ({ name, number }, { rejectWithValue }) => {
    // try {
    //   const { data } = await api.addContact({ name, number });
    //   return data;
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
  },
);

const removeItem = createAsyncThunk(
  'contacts/removeItem',
  async (id, { rejectWithValue }) => {
    // try {
    //   const { data } = await api.delContact(id);
    //   return data.id;
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
  },
);

export { fetchItems, addItem, removeItem };
