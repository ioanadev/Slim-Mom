import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, postDiary, userPostDiary, searchProducts } from './operations';
import { toast } from 'react-toastify';

const initialState = {
  data: null,
  searchData: null,
  isLoading: false,
  isError: null,
  isLoggedIn : false,
 };

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers:{
    resetDiaryState: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postDiary.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(postDiary.fulfilled, (state, action) => {
       state.isLoading = false;
       state.data = action.payload;
       toast.success('Form submitted successfully');
      })
      .addCase(postDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addCase(userPostDiary.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(userPostDiary.fulfilled, (state, action) => {
       state.isLoading = false;
       state.data = {
          daily_calories: action.payload.dailyCalories,
          non_recommended_products: action.payload.nonRecommendedProductsList,
      };
      toast.success('Form submitted successfully');
      state.isError = null;
      })
      .addCase(userPostDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchData = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const {resetDiaryState} = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
