// import { createSelector } from '@reduxjs/toolkit';

/** AUTH selectors */
export const selectIsRegistered = state => state.auth.isRegistered;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectGetInfoPending = state => state.auth.getInfoPending;

export const selectUser = state => state.auth.user;

export const selectAuthError = state => state.auth.error;

// export const SelectName = state => state.auth.user.name

// export const selectFlag = state => state.auth.flag;

/** diary selectors */
export const selectDiary = state => state.diary.data;

export const selectIsLoading = state => state.diary.isLoading;

export const selectISError = state =>state.diary.isError;

export const selectSearchData = state => state.diary.searchData

// export const selectCategories = state => state.transactions.categories;

// export const selectSummary = state => state.transactions.summary;

// export const selectError = state => state.transactions.error;

// export const selectIsLoading = state => state.transactions.isLoading;

// export const selectExchangeData = state => state.transactions.exchangeData;

// export const selectIsFinished = state => state.transactions.isFinished;

// export const selectFiltered = (state, sortCriteria) => {
//   const transactions = selectTransactions(state);
//   const categories = selectCategories(state);

//   const sortedTransactions = [...transactions];
//   switch (sortCriteria.value) {
//     case 'date':
//       sortedTransactions.sort((a, b) => {
//         const dateA = new Date(a.transactionDate);
//         const dateB = new Date(b.transactionDate);
//         return sortCriteria.isReverse ? dateA - dateB : dateB - dateA;
//       });
//       break;
//     case 'amount':
//       sortedTransactions.sort((a, b) => {
//         return sortCriteria.isReverse
//           ? b.amount - a.amount
//           : a.amount - b.amount;
//       });
//       break;
//     case 'category':
//       sortedTransactions.sort((a, b) => {
//         const categoryA =
//           categories.find(cat => cat.id === a.categoryId)?.name || '';
//         const categoryB =
//           categories.find(cat => cat.id === b.categoryId)?.name || '';
//         return sortCriteria.isReverse
//           ? categoryB.localeCompare(categoryA)
//           : categoryA.localeCompare(categoryB);
//       });
//       break;
//     default:
//       return sortedTransactions.sort(
//         (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
//       );
//   }
//   return sortedTransactions;
// };
