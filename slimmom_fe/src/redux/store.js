import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { diaryReducer } from './diarySlice';
// import { transactionsReducer } from './transactionsSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer,
    // transactions: transactionsReducer,
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
