import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./index";
export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type.startsWith("cart/")) {
      const result = next(action);
      const state = store.getState();
      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
      return result;
    }
    return next(action);
  };
