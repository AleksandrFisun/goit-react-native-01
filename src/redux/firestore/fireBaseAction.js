import { createAction } from '@reduxjs/toolkit';

const fireBaseAddDataPending = createAction('fireBase/addDB/pending');
const fireBaseAddDataFulfilled = createAction('fireBase/addDB/fulfilled');
const fireBaseAddDataRejected = createAction('fireBase/addDB/rejected');

const fireBaseGetDataPending = createAction('fireBase/getDB/pending');
const fireBaseGetDataFulfilled = createAction('fireBase/getDB/fulfilled');
const fireBaseGetDataRejected = createAction('fireBase/getDB/rejected');

const fireBaseUpdateDataPending = createAction('fireBase/updateDB/pending');
const fireBaseUpdateDataFulfilled = createAction('fireBase/updateDB/fulfilled');
const fireBaseUpdateDataRejected = createAction('fireBase/updateDB/rejected');

const actionFireBase = {
  fireBaseAddDataPending,
  fireBaseAddDataFulfilled,
  fireBaseAddDataRejected,
  fireBaseGetDataPending,
  fireBaseGetDataFulfilled,
  fireBaseGetDataRejected,
  fireBaseUpdateDataPending,
  fireBaseUpdateDataFulfilled,
  fireBaseUpdateDataRejected,
};
export default actionFireBase;
