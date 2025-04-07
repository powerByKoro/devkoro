import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { rickAndMortyApi } from "../api/rickAndMortyApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Ключ `cart` — это название "слайса" состояния
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
