import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, login, logout, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isAuthing: false,
  loginError: null,
  logoutError: null,
  registerError: null,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    resetAuthState: resetState,
  },
  extraReducers: {
    [register.pending]: state => {
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
    },

    [login.pending]: state => {
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
    },

    [logout.pending]: state => {
      state.isAuthing = true;
    },
    [logout.fulfilled]: resetState,
    [logout.rejected]: (state, { payload }) => {
      state.isAuthing = false;
      state.logoutError = payload;
    },

    [fetchUser.pending]: () => {},
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [fetchUser.rejected]: (state, { payload }) => {
      state.isLoggedIn = false;
    },
  },
});

export const { reducer: authReducer } = slice;
export const { clearError, resetAuthState } = slice.actions;
