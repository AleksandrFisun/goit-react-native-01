import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../config';

const registerDB = createAsyncThunk(
  'auth/registration',
  async ({ email, password }) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credentials.user.meta;
    } catch (error) {
      throw error;
    }
  }
);

const loginDB = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return (
      credentials.user.meta,
      {
        data: {
          name: credentials.user.displayName,
        },
      }
    );
  } catch (error) {
    throw error;
  }
});

const updateUserProfile = createAsyncThunk('auth/update', async update => {
  const user = auth.currentUser;

  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
});
const changeUserProfile = createAsyncThunk('auth/change', async () => {
  const user = auth.currentUser;
  try {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
      } else {
      }
    });
  } catch (error) {
    throw error;
  }
});
const userLogOut = createAsyncThunk('auth/logout', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
});
const authOperations = {
  registerDB,
  loginDB,
  updateUserProfile,
  userLogOut,
  changeUserProfile,
};
export default authOperations;
