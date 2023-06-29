import { createAction } from '@reduxjs/toolkit';

const authLoginPending = createAction('auth/login/pending');
const authLoginFulfilled = createAction('auth/login/fulfilled');
const authLoginRejected = createAction('auth/login/rejected');

const authRegPending = createAction('auth/registration/pending');
const authRegFulfilled = createAction('auth/registration/fulfilled');
const authRegRejected = createAction('auth/registration/rejected');

const authUpdatePending = createAction('auth/update/pending');
const authUpdateFulfilled = createAction('auth/update/fulfilled');
const authUpdateRejected = createAction('auth/update/rejected');

const authLogoutPending = createAction('auth/logout/pending');
const authLogoutFulfilled = createAction('auth/logout/fulfilled');
const authLogoutRejected = createAction('auth/logout/rejected');

const authChangePending = createAction('auth/change/pending');
const authChangeFulfilled = createAction('auth/change/fulfilled');
const authChangeRejected = createAction('auth/change/rejected');

const action = {
  authLoginPending,
  authLoginFulfilled,
  authLoginRejected,
  authRegPending,
  authRegFulfilled,
  authRegRejected,
  authUpdatePending,
  authUpdateFulfilled,
  authUpdateRejected,
  authLogoutPending,
  authLogoutFulfilled,
  authLogoutRejected,
  authChangePending,
  authChangeFulfilled,
  authChangeRejected,
};
export default action;
