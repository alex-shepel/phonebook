const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsAuthing = state => state.auth.isAuthing;
const getError = state =>
  state.auth.error; /* TODO: (auth.error || contacts.error) */

export { getIsLoggedIn, getUsername, getIsAuthing, getError };
