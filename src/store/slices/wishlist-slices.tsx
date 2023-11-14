import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "src/common/interface";
import { toast } from "react-toastify";

interface wishState {
  wishlistArr: IProduct[];
}

const initialState: wishState = {
  wishlistArr: [],
};

const showToast = (text: string, type: "error" | "success") => {
  toast[type](text, {
    position: "top-center",
    autoClose: 1500,
  });
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<IProduct>) => {
      const { payload } = action;
      const duplicateItem = state.wishlistArr.find(
        (product) => product.id === payload.id
      );
      if (duplicateItem) {
        showToast(`${payload.name} is already in your Wishlist`, "error");
      } else {
        state.wishlistArr.push(payload);
        showToast(`${payload.name} has been added in your Wishlist`, "success");
      }
    },

    deleteWishlistProduct: (
      state,
      action: PayloadAction<{ idProduct: string }>
    ) => {
      state.wishlistArr = state.wishlistArr.filter(
        (item) => item.id !== action.payload.idProduct
      );
    },
  },
});

export const { addItemToWishlist, deleteWishlistProduct } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
