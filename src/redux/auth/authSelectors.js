export const selectIsUserAuth = state => state.auth.userAuth;
export const selectIsMessageErrorLogin = state => state.auth.errorLogin;
export const selectIsMessageErrorReg = state => state.auth.errorReg;
export const selectIsUserDataReg = state => state.auth.userDataReg;
export const selectIsUserReg = state => state.auth.userReg;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.getIsFetchAnswer;
export const selectIsToken = state => state.auth.token;
