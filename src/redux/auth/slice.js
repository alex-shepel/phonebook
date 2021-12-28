import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isAuthing: false,
  loginError: null,
  logoutError: null,
  registerError: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reducers: {
      clearError: state => {
        state.error = null;
      },
    },
  },
  extraReducers: {
    [register.pending]: state => {
      console.log('REGISTER request sent');
      state.isAuthing = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isAuthing = false;
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.registerError = null;
    },
    [register.rejected]: (state, { payload }) => {
      state.isAuthing = false;
      state.registerError = payload;
      console.log(payload);
    },

    [login.pending]: state => {
      console.log('LOGIN request sent');
      state.isAuthing = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isAuthing = false;
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.loginError = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.isAuthing = false;
      state.loginError = payload;
      console.log(payload);
    },

    [logout.pending]: state => {
      console.log('LOGOUT request sent');
      state.isAuthing = true;
    },
    [logout.fulfilled]: state => {
      state.isAuthing = false;
      state.token = null;
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.logoutError = null;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isAuthing = false;
      state.logoutError = payload;
      console.log(payload);
    },
  },
});

export const { reducer: authReducer } = slice;
export const { clearError } = slice.actions;
