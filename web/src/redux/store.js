import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'user',
  storage,
}


const rootReducer = combineReducers({
//   auth: authSlice,
//   [categoryApi.reducerPath]: categoryApi.reducer
    [authApi.reducerPath]: authApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

export const persistor = persistStore(store);