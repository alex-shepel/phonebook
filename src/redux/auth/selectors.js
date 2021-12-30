const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsAuthing = state => state.auth.isAuthing;
const getRegisterError = state => state.auth.registerError;
const getLoginError = state => state.auth.loginError;
const getToken = state => state.auth.token;

export {
  getIsLoggedIn,
  getUsername,
  getIsAuthing,
  getLoginError,
  getRegisterError,
  getToken,
};
