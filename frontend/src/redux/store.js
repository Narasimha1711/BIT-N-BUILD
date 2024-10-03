import { combineReducers, configureStore } from '@reduxjs/toolkit'
import apiSlice from './service/apiSlice'
import getCompanies from './features/getCompanies'

const rootReducer = combineReducers({ [apiSlice.reducerPath]: apiSlice.reducer, getCompanies: getCompanies})
const store = configureStore({

    // reducer: {[apiSlice.reducerPath]: apiSlice.reducer},
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})


export default store
