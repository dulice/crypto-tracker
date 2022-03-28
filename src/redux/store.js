import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "./cryptoNewsApi"
import { cryptoApi } from "./coinApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer
    }
})