import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/contacts-api';

const Error = {
  DUPLICATE: 'User already exists.',
  BAD_EMAIL: 'Invalid email.',
  SHORT_PASSWORD: 'Password must be at least 7 chars long.',
  BAD_PASSWORD: 'Invalid password.',
  AUTH_FAILED: 'Invalid email or password.',
  UNKNOWN: 'Unknown backend error occurred.',
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api.signup(credentials);
    } catch (error) {
      const data = error.response.data;
      const errors = data.errors;

      if (data?.code === 11000) {
        return rejectWithValue(Error.DUPLICATE);
      }
      if (errors?.password?.kind === 'minlength') {
        return rejectWithValue(Error.SHORT_PASSWORD);
      }
      if (errors?.password) {
        return rejectWithValue(Error.BAD_PASSWORD);
      }
      if (errors?.email) {
        return rejectWithValue(Error.BAD_EMAIL);
      }

      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await api.login(credentials);
    } catch (error) {
      const data = error.response.data;

      if (Object.keys(data).length === 0) {
        return rejectWithValue(Error.AUTH_FAILED);
      }

      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await api.logout();
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getUser();
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

export { register, login, logout, fetchUser };
