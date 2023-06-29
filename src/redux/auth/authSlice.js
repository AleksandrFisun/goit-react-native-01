import { createSlice } from '@reduxjs/toolkit';
import action from './authAction';

const initialState = {
  userAuth: null,
  userDataReg: { login: null, img: null },
  userReg: false,

  errorLogin: '',
  errorReg: '',
  isLoggedIn: false,
  getIsFetchAnswer: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onUserData(state, action) {
      state.userDataReg = action.payload;
    },
    removeUserAuth(state) {
      state.userAuth = null;
    },
    onUserReg(state) {
      state.userReg = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(action.authLoginPending, state => {
        state.getIsFetchAnswer = true;
      })
      .addCase(action.authLoginFulfilled, (state, action) => {
        state.userAuth = {
          email: action.meta.arg.email,
          password: action.meta.arg.password,
          displayName: action.payload.data.name,
        };
        state.errorLogin = '';
        state.isLoggedIn = true;
        state.getIsFetchAnswer = false;
      })
      .addCase(action.authLoginRejected, (state, action) => {
        state.getIsFetchAnswer = false;
        state.errorLogin = action.error.message;
      })
      //
      .addCase(action.authRegPending, state => {
        state.getIsFetchAnswer = true;
        state.userErrorRegistration = null;
      })
      .addCase(action.authRegFulfilled, (state, action) => {
        state.userAuth = {
          email: action.meta.arg.email,
          password: action.meta.arg.password,
        };
        state.userReg = true;
        state.isLoggedIn = true;
        state.getIsFetchAnswer = false;
      })
      .addCase(action.authRegRejected, (state, action) => {
        state.errorReg = action.error.message;
      })
      .addCase(action.authUpdatePending, state => {
        state.getIsFetchAnswer = true;
      })
      .addCase(action.authUpdateFulfilled, (state, action) => {
        state.userAuth = { ...state.userAuth, ...action.meta.arg };
        state.isLoggedIn = true;
        state.getIsFetchAnswer = false;
      })
      .addCase(action.authUpdateRejected, (state, action) => {
        // state.errorLogin = action.error.message;
      })
      //
      .addCase(action.authLogoutPending, state => {
        state.getIsFetchAnswer = true;
      })
      .addCase(action.authLogoutFulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.getIsFetchAnswer = false;
      })
      .addCase(action.authLogoutRejected, (state, action) => {})
      //
      .addCase(action.authChangePending, state => {
        state.getIsFetchAnswer = true;
      })
      .addCase(action.authChangeFulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.getIsFetchAnswer = false;
      })
      .addCase(action.authChangeRejected, (state, action) => {
        console.log('ERROR CHANGE', action);
      });
  },
});
export const { onUserData, removeUserAuth, onUserReg } = authSlice.actions;
export default authSlice.reducer;
