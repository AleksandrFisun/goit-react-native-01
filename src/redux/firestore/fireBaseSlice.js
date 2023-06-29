import { createSlice } from '@reduxjs/toolkit';
import actionFireBase from './fireBaseAction';

const initialState = {
  user: null,
  userPosts: [],
  userAvatar: null,
};

const fireBaseSlice = createSlice({
  name: 'fireBase',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(actionFireBase.fireBaseAddDataPending, state => {})
      .addCase(actionFireBase.fireBaseAddDataFulfilled, (state, action) => {})
      .addCase(actionFireBase.fireBaseAddDataRejected, (state, action) => {
        console.log('fireBaseAddDataRejected', action);
      })
      //
      .addCase(actionFireBase.fireBaseGetDataPending, state => {})
      .addCase(actionFireBase.fireBaseGetDataFulfilled, (state, action) => {
        state.user = action.payload;
        state.userAvatar = action.payload.userAvatar;
        state.userPosts = action.payload.userPosts;
      })
      .addCase(actionFireBase.fireBaseGetDataRejected, (state, action) => {})
      //
      .addCase(actionFireBase.fireBaseUpdateDataPending, state => {})
      .addCase(actionFireBase.fireBaseUpdateDataFulfilled, (state, action) => {
        console.log('fireBaseUpdateDataFulfilled', action);
      })
      .addCase(actionFireBase.fireBaseUpdateDataRejected, (state, action) => {
        // console.log('fireBaseUpdateDataRejected', action);
      });
  },
});

export default fireBaseSlice.reducer;
