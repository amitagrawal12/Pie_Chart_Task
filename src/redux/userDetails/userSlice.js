import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userList: [],
  },
  reducers: {
    userFetchDetails: (state, actions) => {
      state.userList = actions.payload;
    }
  },
})

export const { userFetchDetails } = userSlice.actions

export default userSlice.reducer