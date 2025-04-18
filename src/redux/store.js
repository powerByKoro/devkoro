import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { rickAndMortyApi } from "../api/rickAndMortyApi";
import { productsApi } from "../api/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rickAndMortyApi.middleware,
      productsApi.middleware,
    ),
});
