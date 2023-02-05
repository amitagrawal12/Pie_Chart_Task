import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userDetails/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});