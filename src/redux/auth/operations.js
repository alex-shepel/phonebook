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
      const data = await api.signup(credentials);
      console.log('data -->', data);
      api.setToken(data.token);
      return data;
    } catch (error) {
      console.log('error.response -->', error.response);
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
      const data = await api.login(credentials);
      console.log('data -->', data);
      api.setToken(data.token);
      return data;
    } catch (error) {
      const data = error.response.data;

      if (Object.keys(data).length === 0) {
        return rejectWithValue(Error.AUTH_FAILED);
      }

      console.log('error.response ->', error.response);
      return rejectWithValue(Error.UNKNOWN);
    }
  },
);

export { register, login };
