"use client";
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import storage from 'redux-persist/lib/storage';
import {RefreshControl} from 'react-native';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';


// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== 'undefined'
//     ? createWebStorage('local')
//     : createNoopStorage();

const persistConfig = {
  key: 'root',
  version: 1,
  keyPrefix: '',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({user: userReducer, cart: cartReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
