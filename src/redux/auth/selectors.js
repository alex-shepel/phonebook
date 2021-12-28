const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsAuthing = state => state.auth.isAuthing;
const getRegisterError = state => state.auth.registerError;
const getLoginError = state => state.auth.loginError;

export {
  getIsLoggedIn,
  getUsername,
  getIsAuthing,
  getLoginError,
  getRegisterError,
};
