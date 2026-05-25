import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

/**
 * Redux store.
 * All global reducers are registered here.
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/**
 * RootState gives full Redux state type.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * AppDispatch gives dispatch type.
 */
export type AppDispatch = typeof store.dispatch;
