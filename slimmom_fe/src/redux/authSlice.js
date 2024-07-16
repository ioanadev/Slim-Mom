import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getInfo } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    id: '',
    
  },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isError: null,
  getInfoPending: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRegistered = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRegistered = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = action.payload;
        state.isRegistered = false;
      })
      
      .addCase(logIn.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRegistered = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoggedIn = false;
      })

      // .addCase(fetchUserInfo.fulfilled, (state, action) => {
      //   state.user.name = action.payload.name;
      //   state.token = action.payload.token;
      // })
      // .addCase(fetchUserInfo.rejected, (state, action) => {
      //   state.isError = action.payload.message;
       
      // })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getInfo.pending, state => {
        state.getInfoPending = true;
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.getInfoPending = false;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.isError = action.payload;
        state.getInfoPending = false;
      });
  },
});

export const authReducer = authSlice.reducer;
