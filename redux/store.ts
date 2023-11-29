import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    productsSlice: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
