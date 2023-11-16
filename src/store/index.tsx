import { Middleware, configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cart-slices";
import modalProductSlices from "./slices/modal-product-slices";
import { localStorageMiddleware } from "./middleware";
import wishlistSlices from "./slices/wishlist-slices";

const store = configureStore({
  reducer: {
    cartProduct: cartSlices,
    modalProduct: modalProductSlices,
    wishlistProduct: wishlistSlices,
  },

  middleware: () => {
    const middleware: Middleware[] = [localStorageMiddleware];
    return middleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
