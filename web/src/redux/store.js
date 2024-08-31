import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import { authApi } from './api/authApi'
import { productApi } from './api/productApi'
import { categoryApi } from './api/categoryApi'

const store = configureStore({
  reducer: {
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, productApi.middleware, categoryApi.middleware]),
})

export default store