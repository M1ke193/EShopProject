import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "src/common/interface";

interface cartState {
  cartArr: ICartProduct[];
}

const initialState: cartState = {
  cartArr: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartProduct>) => {
      const { payload } = action;
      const duplicateCart = state.cartArr.find(
        (product) => product.id === payload.id
      );
      if (duplicateCart) duplicateCart.quantity += payload.quantity;
      else state.cartArr.push(action.payload);

      alert("Product will be add to cart");
    },

    updateCartProduct: (state, action: PayloadAction<ICartProduct>) => {
      const { payload } = action;
      const duplicateCart = state.cartArr.find(
        (product) => product.id === payload.id
      );
      if (duplicateCart) {
        duplicateCart.quantity = payload.quantity;
      }
    },
    deleteCartProduct: (
      state,
      action: PayloadAction<{ idProduct: string }>
    ) => {
      state.cartArr = state.cartArr.filter(
        (item) => item.id !== action.payload.idProduct
      );
    },
    selectedCartProduct: (
      state,
      action: PayloadAction<{ idProduct: string; isChecked?: boolean }>
    ) => {
      const { payload } = action;
      const duplicateCart = state.cartArr.find(
        (product) => product.id === payload.idProduct
      );
      if (duplicateCart) {
        duplicateCart.selected =
          payload.isChecked === undefined
            ? !duplicateCart.selected
            : payload.isChecked;
      }
    },
    orderCartProduct: (state) => {
      state.cartArr.forEach((product) => {
        product.isBought = product.selected || product.isBought;
      });
    },
  },
});

export const {
  addItemToCart,
  updateCartProduct,
  deleteCartProduct,
  selectedCartProduct,
  orderCartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
