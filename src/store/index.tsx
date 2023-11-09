import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cart-slices";

const store = configureStore({
  reducer: {
    cartProduct: cartSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
