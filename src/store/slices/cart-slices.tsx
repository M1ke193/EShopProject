import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "src/common/interface";
import { showToast } from "src/utils/showToast";

const cartData = localStorage.getItem("cart");

interface cartState {
  cartArr: ICartProduct[];
  orderProducts: ICartProduct[];
}

const initialState: cartState = (cartData && JSON.parse(cartData)) || {
  cartArr: [],
  orderProducts: [],
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
      showToast(`${payload.name} has been added in your cart`, "success");
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

    clearCartProduct: (state) => {
      state.cartArr = [];
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
      const delteSelectedProduct: ICartProduct[] = [];

      state.cartArr.forEach((item) => {
        if (item.selected) {
          const duplicateOrderProduct = state.orderProducts.find(
            (Orderitem) => item.id === Orderitem.id
          );
          if (duplicateOrderProduct)
            duplicateOrderProduct.quantity += item.quantity;
          else state.orderProducts.push(item);
        } else delteSelectedProduct.push(item);

        state.cartArr = delteSelectedProduct;
      });
    },

    clearOrderedProduct: (state) => {
      state.orderProducts = [];
    },
  },
});

export const {
  addItemToCart,
  updateCartProduct,
  deleteCartProduct,
  clearCartProduct,
  selectedCartProduct,
  orderCartProduct,
  clearOrderedProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
