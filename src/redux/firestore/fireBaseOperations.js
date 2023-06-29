import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { db, auth } from '../config';

const writeDataToFirestore = createAsyncThunk(
  'fireBase/addDB',
  async ({ name, img }) => {
    const user = auth.currentUser;
    try {
      await setDoc(doc(db, 'user', `${user.uid}`), {
        userEmail: user.email,
        userName: name,
        userUid: user.uid,
        userAvatar: img,
        userPosts: [],
      });
    } catch (error) {
      throw error;
    }
  }
);

const getDataFromFirestore = createAsyncThunk('fireBase/getDB', async () => {
  const user = auth.currentUser;
  try {
    const docRef = doc(db, 'user', `${user.uid}`);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
  } catch (error) {
    throw error;
  }
});

const updateDataInFirestore = createAsyncThunk(
  'fireBase/updateDB',
  async data => {
    const user = auth.currentUser;
    try {
      const ref = doc(db, 'user', `${user.uid}`);

      await updateDoc(ref, {
        userPosts: data,
      });
    } catch (error) {
      throw error;
    }
  }
);
const updateDataComments = createAsyncThunk(
  'fireBase/updateCommentsDB',
  async newData => {
    const user = auth.currentUser;
    try {
      const ref = doc(db, 'user', `${user.uid}`);
      await updateDoc(ref, {
        userPosts: newData,
      });
    } catch (error) {
      throw error;
    }
  }
);
const updateDataPhotoUser = createAsyncThunk(
  'fireBase/updateCommentsDB',
  async newPhotoUser => {
    const user = auth.currentUser;
    console.log(newPhotoUser);
    try {
      const ref = doc(db, 'user', `${user.uid}`);
      await updateDoc(ref, newPhotoUser);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
const fireBaseOperations = {
  writeDataToFirestore,
  getDataFromFirestore,
  updateDataInFirestore,
  updateDataComments,
  updateDataPhotoUser,
};
export default fireBaseOperations;
